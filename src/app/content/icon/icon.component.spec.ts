import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { IconComponent } from './icon.component';
import { IconModule } from './icon.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: IconComponent;
  let fixture: MockedComponentFixture<IconComponent>;

  beforeEach(() =>
    MockBuilder(IconComponent, IconModule)
  );
  beforeEach(() => {
    fixture = MockRender(IconComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
