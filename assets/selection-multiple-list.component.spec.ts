import { SelectionMultipleListComponent } from './selection-multiple-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SelectionMultipleListModule } from './selection-multiple-list.module';

describe('SelectionMultipleListComponent', () => {
  ngMocks.faster();

  let component: SelectionMultipleListComponent;
  let fixture: MockedComponentFixture<SelectionMultipleListComponent>;

  beforeEach(() =>
    MockBuilder(SelectionMultipleListComponent, SelectionMultipleListModule)
  );
  beforeEach(() => {
    fixture = MockRender(SelectionMultipleListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of options', () => {
    const options = ngMocks.findAll('mat-list-option');
    expect(options.length).toEqual(6);
    expect(ngMocks.input(options[0], 'value')).toEqual('Bard');
    expect(ngMocks.formatText(options[0])).toContain('Bard');
  });

  it('should select correct option', () => {
    const list = ngMocks.find('mat-selection-list');
    ngMocks.change(list, [ 'Bard', 'Warlock' ]);
    fixture.detectChanges();
    const selected = ngMocks.find('p');
    expect(ngMocks.formatText(selected)).toContain('Bard,Warlock');
  });
});
