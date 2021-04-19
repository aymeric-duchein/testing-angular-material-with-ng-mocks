import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BadgeComponent } from './badge.component';
import { BadgeModule } from './badge.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: BadgeComponent;
  let fixture: MockedComponentFixture<BadgeComponent>;

  beforeEach(() =>
    MockBuilder(BadgeComponent, BadgeModule)
  );
  beforeEach(() => {
    fixture = MockRender(BadgeComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
