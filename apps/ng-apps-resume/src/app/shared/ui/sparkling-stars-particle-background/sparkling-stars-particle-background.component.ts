import {ChangeDetectionStrategy, Component, ElementRef, inject, input, OnInit} from '@angular/core';
import {IOptions, RecursivePartial, tsParticles} from '@tsparticles/engine';
import {loadStarsPreset} from '@tsparticles/preset-stars';

@Component({
    selector: 'app-sparkling-stars-particle-background',
    templateUrl: './sparkling-stars-particle-background.component.html',
    styleUrl: './sparkling-stars-particle-background.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SparklingStarsParticleBackgroundComponent implements OnInit {
    private readonly elementRef = inject(ElementRef);

    readonly id = input.required<string>();
    readonly animated = input(false);

    ngOnInit() {
        this.initParticles();
    }

    private async initParticles(): Promise<void> {
        if (!tsParticles.getPreset('stars')) {
            await loadStarsPreset(tsParticles);
        }

        const id = 'sparkling-stars-particles-' + this.id();
        (this.elementRef.nativeElement as HTMLElement).id = id;
        await tsParticles.load({
            id,
            options: createSparklingStarsParticleConfig(this.animated()),
        });
    }
}

function createSparklingStarsParticleConfig(animated: boolean): RecursivePartial<IOptions> {
    return {
        preset: 'stars',
        fpsLimit: 8,
        delay: 1,
        fullScreen: false,
        background: {
            color: {
                value: 'none',
            },
        },
        style: {position: 'absolute'},
        particles: {
            color: {
                value: '#fff',
            },
            number: {
                value: 400,
                density: {
                    enable: true,
                    width: 1000,
                    height: 1000,
                },
            },
            size: {
                value: {
                    min: 0.1,
                    max: 1.2,
                },
            },
            ...(animated
                ? {}
                : {
                      move: {enable: false},
                      opacity: {animation: {enable: false}},
                  }),
        },
    };
}
