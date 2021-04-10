import { AppComponent } from './app.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from './app.module';
import { CONTENT_LIST, RouteNames } from './content/content.routing.module';

describe('AppComponent', () => {
  ngMocks.faster();

  let component: AppComponent;
  let fixture: MockedComponentFixture<AppComponent>;

  beforeEach(() =>
    MockBuilder(AppComponent, AppModule)
  );
  beforeEach(() => {
    fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display Angular Material ❤️ngMocks in the title', () => {
    const toolbar = ngMocks.find('mat-toolbar');
    expect(ngMocks.formatText(toolbar)).toContain('Angular Material ❤️ NgMocks');
  });

  it('should display drawer by default', () => {
    const drawer = ngMocks.find('mat-drawer');
    expect(ngMocks.input(drawer, 'opened')).toBeTrue();
  });

  it('should close the drawer', () => {
    const headerBtn = ngMocks.find('button');
    ngMocks.trigger(headerBtn, 'click');
    fixture.detectChanges();

    const drawer = ngMocks.find('mat-drawer');
    expect(ngMocks.input(drawer, 'opened')).toBeFalse();
  });

  it('should display main category links', () => {
    const links = ngMocks.findAll('a:not(.sub-item)');
    expect(links.length).toEqual(CONTENT_LIST.length);
    expect(ngMocks.input(links[0], 'routerLink')).toEqual(CONTENT_LIST[0].route);
    expect(ngMocks.formatText(links[0])).toContain(CONTENT_LIST[0].title);
  });

  it('should display sub-categories links', () => {
    const links = ngMocks.findAll('a.sub-item');
    expect(links.length).toEqual(5);
    expect(ngMocks.input(links[0], 'routerLink')).toEqual([ RouteNames.List, RouteNames.ListBase ]);
    expect(ngMocks.formatText(links[0])).toContain('Base List');
  });
});
