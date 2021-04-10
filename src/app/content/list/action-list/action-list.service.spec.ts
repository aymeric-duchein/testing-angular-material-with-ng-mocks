import { ActionListService } from './action-list.service';

describe('ActionListService', () => {
  let service: ActionListService;
  const mockSnackbar = jasmine.createSpyObj(['open']);

  beforeEach(() => {
    service = new ActionListService(mockSnackbar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save and open snackbar', () => {
    service.save();

    expect(mockSnackbar.open).toHaveBeenCalledWith('Saved');
  });

  it('should undo and open snackbar', () => {
    service.undo();

    expect(mockSnackbar.open).toHaveBeenCalledWith('Undone');
  });
});
