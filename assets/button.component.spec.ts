import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: ButtonComponent;
  let fixture: MockedComponentFixture<ButtonComponent>;

  beforeEach(() =>
    MockBuilder(ButtonComponent, ButtonModule)
  );
  beforeEach(() => {
    fixture = MockRender(ButtonComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
