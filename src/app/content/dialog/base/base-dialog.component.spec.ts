import { BaseDialogComponent } from './base-dialog.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BaseDialogModule } from './base-dialog.module';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { BaseExampleDialogComponent } from './base-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('BaseDialogComponent', () => {
  ngMocks.faster();

  let component: BaseDialogComponent;
  let fixture: MockedComponentFixture<BaseDialogComponent>;
  const mockDialog = {
    open: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(BaseDialogComponent, BaseDialogModule)
      .mock(MatDialog, mockDialog)
  );
  beforeEach(() => {
    fixture = MockRender(BaseDialogComponent);
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
    expect(mockDialog.open).toHaveBeenCalledWith(BaseExampleDialogComponent);
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
    expect(mockDialog.open).toHaveBeenCalledWith(BaseExampleDialogComponent);
    expect(ngMocks.formatText(result)).toEqual('Your color: Yellow');

    afterClosed.complete();
  });
});
