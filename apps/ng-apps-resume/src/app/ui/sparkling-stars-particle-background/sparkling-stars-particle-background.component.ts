import {Component, ElementRef, inject} from '@angular/core';
import {IOptions, RecursivePartial, tsParticles} from '@tsparticles/engine';
import {loadStarsPreset} from '@tsparticles/preset-stars';

@Component({
    selector: 'app-sparkling-stars-particle-background',
    templateUrl: './sparkling-stars-particle-background.component.html',
    styleUrl: './sparkling-stars-particle-background.component.scss',
})
export class SparklingStarsParticleBackgroundComponent {
    private elementRef = inject(ElementRef);

    constructor() {
        this.initParticles();
    }

    private async initParticles(): Promise<void> {
        (this.elementRef.nativeElement as HTMLElement).id = 'sparkling-stars-particles';

        await loadStarsPreset(tsParticles, false);
        await tsParticles.load({
            id: 'sparkling-stars-particles',
            options: sparklingStarsParticleConfig,
        });
    }
}

const sparklingStarsParticleConfig: RecursivePartial<IOptions> = {
    preset: 'stars',
    fpsLimit: 8,
    delay: 2,
    background: {
        color: {
            value: 'none',
        },
    },
    style: {
        height: '100vh',
    },
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
    },
};
