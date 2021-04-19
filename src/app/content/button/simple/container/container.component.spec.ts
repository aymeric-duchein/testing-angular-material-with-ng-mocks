import { ContainerComponent } from './container.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleButtonModule } from '../simple-button.module';

describe('ContainerComponent', () => {
  ngMocks.faster();

  let component: ContainerComponent;
  let fixture: MockedComponentFixture<ContainerComponent>;

  beforeEach(() =>
    MockBuilder(ContainerComponent, SimpleButtonModule)
  );
  beforeEach(() => {
    fixture = MockRender(ContainerComponent);
    component = fixture.point.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
