import { ChangeDetectorRef, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event, UrlTree } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

const isNavigationEnd = (e: Event): e is NavigationEnd => e instanceof NavigationEnd;

@Directive({
  selector: '[isRouteActive]'
})
export class IsRouteActiveDirective implements OnDestroy {
  @Input()
  set isRouteActive(data: string) {
    const classes = data.split(' ');
    this.classes = classes.filter(c => !!c);
  }
  @Input() route = '';

  private classes: string[] = [];
  private isDestroyed$ = new Subject();
  private isActive = false;

  constructor(private router: Router, private element: ElementRef, private renderer: Renderer2,
              private readonly cdr: ChangeDetectorRef) {
    this.router.events.pipe(
      takeUntil(this.isDestroyed$),
      filter(isNavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.update();
    });
  }



  ngOnDestroy(): void {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }

  private update(): void {
    if (!this.route || !this.router.navigated) {
      return;
    }

    const hasActiveLinks = this.hasActiveLinks();
    if (this.isActive !== hasActiveLinks) {
      this.isActive = hasActiveLinks;
      this.cdr.markForCheck();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
    }
  }

  private hasActiveLinks(): boolean {
    return !!this.route && this.router.isActive(this.router.createUrlTree([ this.route ]), false);
  }
}
