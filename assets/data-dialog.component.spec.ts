import { DataDialogComponent } from './data-dialog.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DataDialogModule } from './data-dialog.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { DataExampleDialogComponent } from './data-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('DataDialogComponent', () => {
  ngMocks.faster();

  let component: DataDialogComponent;
  let fixture: MockedComponentFixture<DataDialogComponent>;
  const mockDialog = {
    open: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(DataDialogComponent, DataDialogModule)
      .mock(MatDialog, mockDialog)
  );
  beforeEach(() => {
    fixture = MockRender(DataDialogComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog and await the result', () => {
    const afterClosed = new Subject();
    mockDialog.open.and.returnValue({ afterClosed: () => afterClosed});
    const button = ngMocks.find('button');
    ngMocks.trigger(button, 'click');

    fixture.detectChanges();
    const result = ngMocks.find('p');
    expect(mockDialog.open).toHaveBeenCalledWith(DataExampleDialogComponent, { data: { title: 'Choose one color' }});
    expect(ngMocks.formatText(result)).toEqual('Your color:');

    afterClosed.complete();
  });

  it('should open the dialog and display the result', () => {
    const afterClosed = new Subject();
    mockDialog.open.and.returnValue({ afterClosed: () => afterClosed});
    const button = ngMocks.find('button');
    ngMocks.trigger(button, 'click');

    fixture.detectChanges();
    afterClosed.next('Yellow');
    fixture.detectChanges();
    const result = ngMocks.find('p');
    expect(mockDialog.open).toHaveBeenCalledWith(DataExampleDialogComponent, { data: { title: 'Choose one color' }});
    expect(ngMocks.formatText(result)).toEqual('Your color: Yellow');

    afterClosed.complete();
  });
});
