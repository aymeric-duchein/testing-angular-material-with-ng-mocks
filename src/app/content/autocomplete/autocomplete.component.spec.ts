import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteModule } from './autocomplete.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: AutocompleteComponent;
  let fixture: MockedComponentFixture<AutocompleteComponent>;

  beforeEach(() =>
    MockBuilder(AutocompleteComponent, AutocompleteModule)
  );
  beforeEach(() => {
    fixture = MockRender(AutocompleteComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
