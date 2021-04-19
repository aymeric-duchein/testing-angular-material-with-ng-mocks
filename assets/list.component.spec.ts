import { ListComponent } from './list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ListModule } from './list.module';

describe('ListComponent', () => {
  ngMocks.faster();

  let component: ListComponent;
  let fixture: MockedComponentFixture<ListComponent>;

  beforeEach(() =>
    MockBuilder(ListComponent, ListModule)
  );
  beforeEach(() => {
    fixture = MockRender(ListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
