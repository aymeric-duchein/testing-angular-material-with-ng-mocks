import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BaseDialogModule } from './base-dialog.module';
import { BaseExampleDialogComponent } from './base-example-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('BaseExampleDialogComponent', () => {
  ngMocks.faster();

  let component: BaseExampleDialogComponent;
  let fixture: MockedComponentFixture<BaseExampleDialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(BaseExampleDialogComponent, BaseDialogModule)
      .mock(MatDialogRef, mockDialogRef)
  );
  beforeEach(() => {
    fixture = MockRender(BaseExampleDialogComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
