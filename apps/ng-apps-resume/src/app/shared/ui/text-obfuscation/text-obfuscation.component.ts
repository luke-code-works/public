import {ChangeDetectionStrategy, Component, effect, input, signal} from '@angular/core';

@Component({
    selector: 'app-text-obfuscation,[app-text-obfuscation]',
    templateUrl: './text-obfuscation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextObfuscationComponent {
    readonly text = input.required<string>();

    protected readonly segments = signal<ObfuscatedTextSegments>([]);

    constructor() {
        effect(() => {
            this.segments.set(obfuscateText(this.text()));
        });
    }
}

type ObfuscationMode = 'normal' | 'zero-saturated' | 'hidden';
type ObfuscatedTextSegment = [mode: ObfuscationMode, text: string];
type ObfuscatedTextSegments = ObfuscatedTextSegment[];

function getRandomText(minLength: number, maxLength: number): string {
    const randomChars = 'abcdefghijklmnopqrstuvwxyz';
    const randomLength = getRandomLength(minLength, maxLength);

    let randomText = '';
    for (let i = 0; i < randomLength; i++) {
        const randomIndex = Math.floor(Math.random() * randomChars.length);
        randomText += randomChars[randomIndex];
    }

    return randomText;
}

function getRandomLength(minLength: number, maxLength: number): number {
    return Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
}

function saturateWithZeroChars(text: string): string {
    const zeroChars = ['\u200B', '\u200C', '\u200D', '\u2060', '\uFEFF'];

    return [...text].reduce((result, char) => {
        result += char;

        if (Math.random() < 0.25) {
            result += zeroChars[Math.floor(Math.random() * zeroChars.length)];
        }

        return result;
    }, '');
}

function obfuscateText(text: string, minLength = 2, maxLength = 5): ObfuscatedTextSegments {
    const chars = [...text];
    const segments: ObfuscatedTextSegments = [];

    let i = 0;
    while (i < chars.length) {
        const length = Math.min(Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength, chars.length - i);
        const segment = chars.slice(i, i + length).join('');

        const zeroSaturatedProbability = 0.4;
        if (Math.random() < zeroSaturatedProbability) {
            segments.push(['zero-saturated', saturateWithZeroChars(segment)]);
        } else {
            segments.push(['normal', segment]);
        }

        const hiddenProbability = 0.4;
        if (Math.random() < hiddenProbability) {
            segments.push(['hidden', getRandomText(2, 5)]);
        }

        i += length;
    }

    return segments;
}
