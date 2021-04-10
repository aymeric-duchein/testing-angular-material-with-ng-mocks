import { BaseBottomSheetComponent } from './base-bottom-sheet.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BaseBottomSheetModule } from './base-bottom-sheet.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { BaseExampleSheetComponent } from './base-example-sheet.component';

describe('BaseBottomSheetComponent', () => {
  ngMocks.faster();

  let component: BaseBottomSheetComponent;
  let fixture: MockedComponentFixture<BaseBottomSheetComponent>;
  const mockBottomSheet = {
    open: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(BaseBottomSheetComponent, BaseBottomSheetModule)
      .mock(MatBottomSheet, mockBottomSheet)
  );
  beforeEach(() => {
    fixture = MockRender(BaseBottomSheetComponent);
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
    expect(mockBottomSheet.open).toHaveBeenCalledWith(BaseExampleSheetComponent);
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
    expect(mockBottomSheet.open).toHaveBeenCalledWith(BaseExampleSheetComponent);
    expect(ngMocks.formatText(result)).toEqual('Your color: Yellow');

    afterDismissed.complete();
  });
});
