import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { GridListComponent } from './grid-list.component';
import { GridListModule } from './grid-list.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: GridListComponent;
  let fixture: MockedComponentFixture<GridListComponent>;

  beforeEach(() =>
    MockBuilder(GridListComponent, GridListModule)
  );
  beforeEach(() => {
    fixture = MockRender(GridListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
