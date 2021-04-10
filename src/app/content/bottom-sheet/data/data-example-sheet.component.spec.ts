import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DataBottomSheetModule } from './data-bottom-sheet.module';
import { DataExampleSheetComponent } from './data-example-sheet.component';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

describe('BaseExampleSheetComponent', () => {
  ngMocks.faster();

  let component: DataExampleSheetComponent;
  let fixture: MockedComponentFixture<DataExampleSheetComponent>;
  const mockData = { title: 'Fake title' };
  const mockBottomSheetRef = {
    dismiss: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(DataExampleSheetComponent, DataBottomSheetModule)
      .mock(MatBottomSheetRef, mockBottomSheetRef)
      .mock(MAT_BOTTOM_SHEET_DATA, mockData)
  );
  beforeEach(() => {
    fixture = MockRender(DataExampleSheetComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = ngMocks.find('h3');
    expect(ngMocks.formatText(title)).toEqual('Fake title');
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
