import { BottomSheetComponent } from './bottom-sheet.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BottomSheetModule } from './bottom-sheet.module';

describe('BottomSheetComponent', () => {
  ngMocks.faster();

  let component: BottomSheetComponent;
  let fixture: MockedComponentFixture<BottomSheetComponent>;

  beforeEach(() =>
    MockBuilder(BottomSheetComponent, BottomSheetModule)
  );
  beforeEach(() => {
    fixture = MockRender(BottomSheetComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
