import { ActionListComponent } from './action-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ActionListModule } from './action-list.module';
import { ActionListService } from './action-list.service';

describe('ActionListComponent', () => {
  ngMocks.faster();

  let component: ActionListComponent;
  let fixture: MockedComponentFixture<ActionListComponent>;
  const mockActionListService = {
    save: jasmine.createSpy(),
    undo: jasmine.createSpy(),
  };
  beforeEach(() =>
    MockBuilder(ActionListComponent, ActionListModule)
      .mock(ActionListService, mockActionListService)
  );
  beforeEach(() => {
    fixture = MockRender(ActionListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save', () => {
    const saveBtn = ngMocks.find('button');
    ngMocks.trigger(saveBtn, 'click');

    expect(mockActionListService.save).toHaveBeenCalled();
  });

  it('should undo', () => {
    const undoBtn = ngMocks.find('button:nth-child(2)');
    ngMocks.trigger(undoBtn, 'click');

    expect(mockActionListService.undo).toHaveBeenCalled();
  });
});
