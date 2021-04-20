import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ButtonToggleComponent } from './button-toggle.component';
import { ButtonToggleModule } from './button-toggle.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: ButtonToggleComponent;
  let fixture: MockedComponentFixture<ButtonToggleComponent>;

  beforeEach(() =>
    MockBuilder(ButtonToggleComponent, ButtonToggleModule)
  );
  beforeEach(() => {
    fixture = MockRender(ButtonToggleComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
