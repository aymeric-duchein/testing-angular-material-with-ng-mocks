import { ContainerComponent } from './container.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ActionListModule } from '../action-list.module';

describe('ContainerComponent', () => {
  ngMocks.faster();

  let component: ContainerComponent;
  let fixture: MockedComponentFixture<ContainerComponent>;

  beforeEach(() =>
    MockBuilder(ContainerComponent, ActionListModule)
  );
  beforeEach(() => {
    fixture = MockRender(ContainerComponent);
    component = fixture.point.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
