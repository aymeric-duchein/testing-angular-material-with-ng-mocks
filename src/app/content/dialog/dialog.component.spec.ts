import { DialogComponent } from './dialog.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DialogModule } from './dialog.module';

describe('BottomSheetComponent', () => {
  ngMocks.faster();

  let component: DialogComponent;
  let fixture: MockedComponentFixture<DialogComponent>;

  beforeEach(() =>
    MockBuilder(DialogComponent, DialogModule)
  );
  beforeEach(() => {
    fixture = MockRender(DialogComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
