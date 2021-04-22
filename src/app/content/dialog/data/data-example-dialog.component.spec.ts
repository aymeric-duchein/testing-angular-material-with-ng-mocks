import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { DataDialogModule } from './data-dialog.module';
import { DataExampleDialogComponent } from './data-example-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DataExampleDialogComponent', () => {
  ngMocks.faster();

  let component: DataExampleDialogComponent;
  let fixture: MockedComponentFixture<DataExampleDialogComponent>;
  const mockData = { title: 'Fake title' };
  const mockDialogRef = {
    close: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(DataExampleDialogComponent, DataDialogModule)
      .mock(MatDialogRef, mockDialogRef)
      .mock(MAT_DIALOG_DATA, mockData)
  );
  beforeEach(() => {
    fixture = MockRender(DataExampleDialogComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = ngMocks.find('h3');
    expect(ngMocks.formatText(title)).toEqual('Fake title');
  });

  it('should close with Teal color', () => {
    const tealBtn = ngMocks.find('button[color="accent"]');
    ngMocks.trigger(tealBtn, 'click');

    expect(mockDialogRef.close).toHaveBeenCalledWith('Teal');
  });

  it('should close with Purple color', () => {
    const prupleBtn = ngMocks.find('button[color="primary"]');
    ngMocks.trigger(prupleBtn, 'click');

    expect(mockDialogRef.close).toHaveBeenCalledWith('Purple');
  });

});
