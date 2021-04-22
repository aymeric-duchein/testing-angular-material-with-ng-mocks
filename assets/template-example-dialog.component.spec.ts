import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { TemplateDialogModule } from './template-dialog.module';
import { TemplateExampleDialogComponent } from './template-example-dialog.component';
import { MatDialogTitle } from '@angular/material/dialog';

describe('TemplateExampleDialogComponent', () => {
  ngMocks.faster();

  let component: TemplateExampleDialogComponent;
  let fixture: MockedComponentFixture<TemplateExampleDialogComponent>;

  beforeEach(() =>
    MockBuilder(TemplateExampleDialogComponent, TemplateDialogModule)
  );
  beforeEach(() => {
    fixture = MockRender(TemplateExampleDialogComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close without result', () => {
    const cancelBtn = ngMocks.find('mat-dialog-actions > button');
    expect(ngMocks.input(cancelBtn, 'mat-dialog-close')).toBeDefined();
    expect(ngMocks.formatText(cancelBtn)).toEqual('Cancel');
  });

  it('should close with true value', () => {
    const okBtn = ngMocks.find('mat-dialog-actions > button:nth-child(2)');
    expect(ngMocks.input(okBtn, 'mat-dialog-close')).toEqual(true);
    expect(ngMocks.formatText(okBtn)).toEqual('OK');
  });

  it('should display a title', () => {
    const title = ngMocks.find('h2');
    expect(ngMocks.findInstance(title, MatDialogTitle, null)).toBeDefined();
  });

  it('should display the content', () => {
    const content = ngMocks.find('mat-dialog-content');
    expect(ngMocks.formatText(content)).toContain('This is the dialog content.');
  });
});
