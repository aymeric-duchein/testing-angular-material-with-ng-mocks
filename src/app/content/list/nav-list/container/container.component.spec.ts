import { ContainerComponent } from './container.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { NavListModule } from '../nav-list.module';

describe('ContainerComponent', () => {
  ngMocks.faster();

  let component: ContainerComponent;
  let fixture: MockedComponentFixture<ContainerComponent>;

  beforeEach(() =>
    MockBuilder(ContainerComponent, NavListModule)
  );
  beforeEach(() => {
    fixture = MockRender(ContainerComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
