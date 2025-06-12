import {Directive, ElementRef, inject, input, OnDestroy, OnInit, signal} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/**
 * Directive that animates an element into view using GSAP + ScrollTrigger.
 */
@Directive({
    selector: '[appGsapScrollAnimate]',
})
export class GSAPScrollAnimateDirective implements OnInit, OnDestroy {
    private elementRef = inject(ElementRef);

    distance = input(100);
    reverse = input(false);
    threshold = input(0.1);
    axis = input<keyof Pick<gsap.TweenVars, 'x' | 'y'>>('y');
    scale = input<gsap.TweenVars['scale']>(1);
    opacity = input<gsap.TweenVars['opacity']>(0.1);
    duration = input<gsap.TweenVars['duration']>(0.8);
    delay = input<gsap.TweenVars['delay']>(0);
    ease = input<gsap.TweenVars['ease']>('power3.out');

    private tween = signal<GSAPTween | undefined>(undefined);

    constructor() {
        // Multiple registrations are harmless, but nonetheless not recommended.
        gsap.registerPlugin(ScrollTrigger);
    }

    ngOnInit() {
        const offset = this.distance() * (this.reverse() ? -1 : 1);
        const startPct = (1 - this.threshold()) * 100;

        gsap.set(this.elementRef.nativeElement, {
            [this.axis()]: offset,
            scale: this.scale(),
            opacity: this.opacity(),
        });

        const tween = gsap.to(this.elementRef.nativeElement, {
            [this.axis()]: 0,
            scale: 1,
            opacity: 1,
            duration: this.duration(),
            ease: this.ease(),
            delay: this.delay(),
            scrollTrigger: {
                trigger: this.elementRef.nativeElement,
                start: `top ${startPct}%`,
                toggleActions: 'play none none none',
                once: true,
            },
        });
        this.tween.set(tween);
    }

    ngOnDestroy() {
        this.tween()?.scrollTrigger?.kill();
        this.tween()?.kill();
        gsap.killTweensOf(this.elementRef.nativeElement);
    }
}
