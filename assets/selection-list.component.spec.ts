import { SelectionListComponent } from './selection-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SelectionListModule } from './selection-list.module';

describe('SelectionListComponent', () => {
  ngMocks.faster();

  let component: SelectionListComponent;
  let fixture: MockedComponentFixture<SelectionListComponent>;

  beforeEach(() =>
    MockBuilder(SelectionListComponent, SelectionListModule)
  );
  beforeEach(() => {
    fixture = MockRender(SelectionListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of options', () => {
    const options = ngMocks.findAll('mat-list-option');
    expect(options.length).toEqual(6);
    expect(ngMocks.input(options[0], 'value')).toEqual('Barbarian');
    expect(ngMocks.formatText(options[0])).toContain('Barbarian');
  });

  it('should select correct option', () => {
    const list = ngMocks.find('mat-selection-list');
    ngMocks.change(list, 'Paladin');
    fixture.detectChanges();
    const selected = ngMocks.find('p');
    expect(ngMocks.formatText(selected)).toContain('Paladin');
  });
});
