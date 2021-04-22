import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DividerComponent } from './divider.component';
import { DividerModule } from './divider.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: DividerComponent;
  let fixture: MockedComponentFixture<DividerComponent>;

  beforeEach(() =>
    MockBuilder(DividerComponent, DividerModule)
  );
  beforeEach(() => {
    fixture = MockRender(DividerComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
