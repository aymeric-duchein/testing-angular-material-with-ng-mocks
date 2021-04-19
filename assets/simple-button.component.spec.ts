import { SimpleButtonComponent } from './simple-button.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleButtonModule } from './simple-button.module';
import { MatAnchor, MatButton } from '@angular/material/button';

describe('SimpleButtonComponent', () => {
  ngMocks.faster();

  let component: SimpleButtonComponent;
  let fixture: MockedComponentFixture<SimpleButtonComponent>;

  beforeEach(() =>
    MockBuilder(SimpleButtonComponent, SimpleButtonModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleButtonComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a basic button', () => {
    const firstButton = ngMocks.find(MatButton);

    expect(ngMocks.formatText(firstButton)).toEqual('Basic');
  });

  it('should display a link to google.com', () => {
    const linkButton = ngMocks.find(MatAnchor);

    expect(ngMocks.formatText(linkButton)).toEqual('Link');
    expect(linkButton.nativeElement.href).toEqual('https://www.google.com/');
    expect(linkButton.nativeElement.target).toEqual('_blank');
  });

  it('should display a disabled button', () => {
    const disabledButton = ngMocks.find('button[mat-raised-button]');

    expect(ngMocks.formatText(disabledButton)).toEqual('Disabled');
    expect(ngMocks.input(disabledButton, 'disabled')).toBeDefined();
  });

  it('should display a warning button', () => {
    const warningButton = ngMocks.find('button[mat-stroked-button]');

    expect(ngMocks.formatText(warningButton)).toEqual('Warn');
  });

  it('should display a flat button', () => {
    const flatButton = ngMocks.find('button[mat-flat-button]');

    expect(ngMocks.formatText(flatButton)).toEqual('Basic');
  });

  it('should display an icon button', () => {
    const iconButton = ngMocks.find('button[mat-icon-button]');

    expect(ngMocks.formatText(iconButton)).toEqual('home');
    expect(ngMocks.input(iconButton, 'color')).toEqual('primary');
  });

  it('should display a fab', () => {
    const fabButton = ngMocks.find('button[mat-fab]');

    expect(ngMocks.formatText(fabButton)).toEqual('bookmark');
    expect(ngMocks.input(fabButton, 'color')).toEqual('accent');
  });

  it('should display a mini fab', () => {
    const miniFabButton = ngMocks.find('button[mat-mini-fab]');

    expect(ngMocks.formatText(miniFabButton)).toEqual('filter_list');
    expect(ngMocks.input(miniFabButton, 'color')).toEqual('warn');
  });

  it('should increment the counter', () => {
    let incrementButton = ngMocks.find('button:last-child');
    expect(ngMocks.formatText(incrementButton)).toEqual('Click: 0');
    ngMocks.trigger(incrementButton, 'click');
    fixture.detectChanges();

    incrementButton = ngMocks.find('button:last-child');
    expect(ngMocks.formatText(incrementButton)).toEqual('Click: 1');
  });
});
