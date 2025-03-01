import {TestBed} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {NxWelcomeComponent} from '../nx-welcome/nx-welcome.component';
import {RootComponent} from './root.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RootComponent, NxWelcomeComponent, RouterModule.forRoot([])],
        }).compileComponents();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(RootComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Welcome test');
    });
});
