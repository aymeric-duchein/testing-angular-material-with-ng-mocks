import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BaseBottomSheetModule } from './base-bottom-sheet.module';
import { BaseExampleSheetComponent } from './base-example-sheet.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

describe('BaseExampleSheetComponent', () => {
  ngMocks.faster();

  let component: BaseExampleSheetComponent;
  let fixture: MockedComponentFixture<BaseExampleSheetComponent>;
  const mockBottomSheetRef = {
    dismiss: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(BaseExampleSheetComponent, BaseBottomSheetModule)
      .mock(MatBottomSheetRef, mockBottomSheetRef)
  );
  beforeEach(() => {
    fixture = MockRender(BaseExampleSheetComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss with Teal color', () => {
    const tealBtn = ngMocks.find('button[color="accent"]');
    ngMocks.trigger(tealBtn, 'click');

    expect(mockBottomSheetRef.dismiss).toHaveBeenCalledWith('Teal');
  });

  it('should dismiss with Purple color', () => {
    const prupleBtn = ngMocks.find('button[color="primary"]');
    ngMocks.trigger(prupleBtn, 'click');

    expect(mockBottomSheetRef.dismiss).toHaveBeenCalledWith('Purple');
  });

});
