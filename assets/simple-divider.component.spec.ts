import { SimpleDividerComponent } from './simple-divider.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleDividerModule } from './simple-divider.module';

describe('SimpleDividerComponent', () => {
  ngMocks.faster();

  let component: SimpleDividerComponent;
  let fixture: MockedComponentFixture<SimpleDividerComponent>;

  beforeEach(() =>
    MockBuilder(SimpleDividerComponent, SimpleDividerModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleDividerComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a simple divider', () => {
    const divider = ngMocks.find('mat-list > mat-divider', undefined);
    expect(divider).toBeDefined();
  });

  it('should display an inset divider', () => {
    const divider = ngMocks.find('mat-list-item > mat-divider', undefined);

    expect(divider).toBeDefined();
    expect(ngMocks.input(divider, 'inset')).toBeDefined();
  });

  it('should display a vertical divider', () => {
    const divider = ngMocks.find('div > mat-divider', undefined);

    expect(divider).toBeDefined();
    expect(ngMocks.input(divider, 'vertical')).toBeDefined();
  });
});
