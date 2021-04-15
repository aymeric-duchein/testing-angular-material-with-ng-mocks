import { NavListComponent } from './nav-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { NavListModule } from './nav-list.module';
import { NavListInfoService } from './nav-list.info.service';

describe('NavListComponent', () => {
  ngMocks.faster();

  let component: NavListComponent;
  let fixture: MockedComponentFixture<NavListComponent, { links: { content: string; href: string }[] }>;
  const navListInfoService = {
    getInfo: jasmine.createSpy(),
  };
  const mockLinks = [
    { content: 'link 1', href: 'href_1' },
    { content: 'link 2', href: 'href_2' },
    { content: 'link 3', href: 'href_3' },
  ];

  beforeEach(() =>
    MockBuilder(NavListComponent, NavListModule)
    .mock(NavListInfoService, navListInfoService)
  );
  beforeEach(() => {
    fixture = MockRender(NavListComponent, { links: mockLinks });
    component = fixture.point.componentInstance;

    navListInfoService.getInfo.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 different links', () => {
    expect(ngMocks.findAll('mat-list-item').length).toEqual(3);
  });

  it('should display link content and use correct href', () => {
    const firstLink = ngMocks.find('a[matLine]');
    expect(ngMocks.formatText(firstLink)).toContain(mockLinks[0].content);
    expect(firstLink.nativeElement.href).toContain(mockLinks[0].href);
  });

  it('should update displayed info', () => {
    navListInfoService.getInfo.and.returnValue('Fake Info');

    let infoP = ngMocks.find('p');
    expect(ngMocks.formatText(infoP)).not.toContain('FakeInfo');
    const linkInfoButton = ngMocks.find('mat-list-item > button');
    ngMocks.trigger(linkInfoButton, 'click');
    fixture.detectChanges();

    infoP = ngMocks.find('p');
    expect(ngMocks.formatText(infoP)).toContain('Fake Info');
  });
});
