import { DataBottomSheetComponent } from './data-bottom-sheet.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DataBottomSheetModule } from './data-bottom-sheet.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { DataExampleSheetComponent } from './data-example-sheet.component';

describe('BaseBottomSheetComponent', () => {
  ngMocks.faster();

  let component: DataBottomSheetComponent;
  let fixture: MockedComponentFixture<DataBottomSheetComponent>;
  const mockBottomSheet = {
    open: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(DataBottomSheetComponent, DataBottomSheetModule)
      .mock(MatBottomSheet, mockBottomSheet)
  );
  beforeEach(() => {
    fixture = MockRender(DataBottomSheetComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the bottom sheet and await the result', () => {
    const afterDismissed = new Subject();
    mockBottomSheet.open.and.returnValue({ afterDismissed: () => afterDismissed});
    const button = ngMocks.find('button');
    ngMocks.trigger(button, 'click');

    fixture.detectChanges();
    const result = ngMocks.find('p');
    expect(mockBottomSheet.open).toHaveBeenCalledWith(DataExampleSheetComponent, { data: { title: 'Choose one color' }});
    expect(ngMocks.formatText(result)).toEqual('Your color:');

    afterDismissed.complete();
  });

  it('should open the bottom sheet and display the result', () => {
    const afterDismissed = new Subject();
    mockBottomSheet.open.and.returnValue({ afterDismissed: () => afterDismissed});
    const button = ngMocks.find('button');
    ngMocks.trigger(button, 'click');

    fixture.detectChanges();
    afterDismissed.next('Yellow');
    fixture.detectChanges();
    const result = ngMocks.find('p');
    expect(mockBottomSheet.open).toHaveBeenCalledWith(DataExampleSheetComponent, { data: { title: 'Choose one color' }});
    expect(ngMocks.formatText(result)).toEqual('Your color: Yellow');

    afterDismissed.complete();
  });
});
