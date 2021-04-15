import { IsRouteActiveDirective } from './is-route-active.directive';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { IsRouteActiveModule } from './is-route-active.module';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';

describe('IsRouteActiveDirective', () => {
  ngMocks.faster();

  let fixture: MockedComponentFixture;
  let component;
  const mockRouterEvents = new Subject<Event>();
  const mockRouter = {
    events: mockRouterEvents,
    navigated: false,
    isActive: jasmine.createSpy(),
    createUrlTree: jasmine.createSpy(),
  };

  beforeEach(() => {
    mockRouter.isActive.calls.reset();
    mockRouter.createUrlTree.calls.reset();
  });
  describe('without first navigation', () => {
    beforeEach(() => {
      mockRouter.navigated = false;
    });
    beforeEach(() => MockBuilder(IsRouteActiveDirective, IsRouteActiveModule)
      .mock(Router, mockRouter)
    );
    beforeEach(() => {
      fixture = MockRender(`<div isRouteActive="c1 c2" route="route"></div>`);
      component = fixture.point.componentInstance;
    });

    it('should not add classes before first navigation', () => {
      expect(ngMocks.find('div.c1', undefined)).not.toBeDefined();
      expect(mockRouter.isActive).not.toHaveBeenCalled();
      expect(mockRouter.createUrlTree).not.toHaveBeenCalled();
    });

    it('should not add classes for all navigation event', () => {
      mockRouter.events.next(new NavigationStart(0, 'route'));
      expect(ngMocks.find('div.c1', undefined)).not.toBeDefined();
      expect(mockRouter.isActive).not.toHaveBeenCalled();
      expect(mockRouter.createUrlTree).not.toHaveBeenCalled();
    });

    it('should not add classes before first navigation', () => {
      mockRouter.events.next(new NavigationEnd(0, 'route', 'route'));

      expect(ngMocks.find('div.c1', undefined)).not.toBeDefined();
      expect(mockRouter.isActive).not.toHaveBeenCalled();
      expect(mockRouter.createUrlTree).not.toHaveBeenCalled();
    });
  });

  describe('with first navigation', () => {
    beforeEach(() => {
      mockRouter.navigated = true;
    });
    beforeEach(() => MockBuilder(IsRouteActiveDirective, IsRouteActiveModule)
      .mock(Router, mockRouter)
    );
    beforeEach(() => {
      fixture = MockRender(`<div isRouteActive="c1 c2" route="route"></div>`);
      component = fixture.point.componentInstance;
    });

    it('should not add classes if the route is not the correct one', () => {
      mockRouter.isActive.and.returnValue(false);
      mockRouter.createUrlTree.and.returnValue('Fake tree');
      mockRouter.events.next(new NavigationEnd(0, 'route', 'route'));

      expect(ngMocks.find('div.c1', undefined)).not.toBeDefined();
      expect(mockRouter.isActive).toHaveBeenCalledWith('Fake tree', false);
      expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['route']);
    });

    it('should add classes', () => {

      mockRouter.isActive.and.returnValue(true);
      mockRouter.createUrlTree.and.returnValue('Fake tree');
      mockRouter.events.next(new NavigationEnd(0, 'route', 'route'));
      fixture.detectChanges();

      expect(ngMocks.find('div.c1', undefined)).toBeDefined();
      expect(ngMocks.find('div.c2', undefined)).toBeDefined();

      expect(mockRouter.isActive).toHaveBeenCalledWith('Fake tree', false);
      expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['route']);
    });

    it('should add classes then remove classes', () => {

      mockRouter.isActive.and.returnValue(true);
      mockRouter.createUrlTree.and.returnValue('Fake tree');
      mockRouter.events.next(new NavigationEnd(0, 'route', 'route'));
      fixture.detectChanges();
      mockRouter.isActive.and.returnValue(false);
      mockRouter.events.next(new NavigationEnd(1, 'route', 'route'));
      fixture.detectChanges();
      expect(ngMocks.find('div.c1', undefined)).not.toBeDefined();
      expect(ngMocks.find('div.c2', undefined)).not.toBeDefined();

      expect(mockRouter.isActive).toHaveBeenCalledWith('Fake tree', false);
      expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['route']);
    });
  });

});
