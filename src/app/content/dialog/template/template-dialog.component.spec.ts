import { TemplateDialogComponent } from './template-dialog.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { TemplateDialogModule } from './template-dialog.module';
import { Subject } from 'rxjs';
import { TemplateExampleDialogComponent } from './template-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('TemplateDialogComponent', () => {
  ngMocks.faster();

  let component: TemplateDialogComponent;
  let fixture: MockedComponentFixture<TemplateDialogComponent>;
  const mockDialog = {
    open: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(TemplateDialogComponent, TemplateDialogModule)
      .mock(MatDialog, mockDialog)
  );
  beforeEach(() => {
    fixture = MockRender(TemplateDialogComponent);
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
    expect(mockDialog.open).toHaveBeenCalledWith(TemplateExampleDialogComponent, { height: '180px', width: '250px' });
    expect(ngMocks.formatText(result)).toEqual('Closed with Ok button:');

    afterClosed.complete();
  });

  it('should open the dialog and display the result', () => {
    const afterClosed = new Subject();
    mockDialog.open.and.returnValue({ afterClosed: () => afterClosed});
    const button = ngMocks.find('button');
    ngMocks.trigger(button, 'click');

    fixture.detectChanges();
    afterClosed.next(true);
    fixture.detectChanges();
    const result = ngMocks.find('p');
    expect(mockDialog.open).toHaveBeenCalledWith(TemplateExampleDialogComponent, { height: '180px', width: '250px' });
    expect(ngMocks.formatText(result)).toEqual('Closed with Ok button: true');

    afterClosed.complete();
  });
});
