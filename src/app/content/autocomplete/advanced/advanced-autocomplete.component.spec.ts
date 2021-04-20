import { AdvancedAutocompleteComponent } from './advanced-autocomplete.component';
import { isMockControlValueAccessor, MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { AdvancedAutocompleteModule } from './advanced-autocomplete.module';
import { MatOption } from '@angular/material/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('ControlsAutocompleteComponent', () => {
  ngMocks.faster();

  let component: AdvancedAutocompleteComponent;
  let fixture: MockedComponentFixture<AdvancedAutocompleteComponent>;

  beforeEach(() =>
    MockBuilder(AdvancedAutocompleteComponent, AdvancedAutocompleteModule)
    .keep(ReactiveFormsModule)
  );
  beforeEach(() => {
    fixture = MockRender(AdvancedAutocompleteComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all options', () => {
    const options = ngMocks.findAll(MatOption);
    expect(options.length).toEqual(3);
    expect(ngMocks.input(options[0], 'value')).toEqual({ name: 'Mary'});
    expect(ngMocks.formatText(options[0])).toEqual('Mary');
    expect(ngMocks.input(options[1], 'value')).toEqual({ name: 'Shelley'});
    expect(ngMocks.formatText(options[1])).toEqual('Shelley');
    expect(ngMocks.input(options[2], 'value')).toEqual({ name: 'Igor'});
    expect(ngMocks.formatText(options[2])).toEqual('Igor');
  });

  it('should link input to autocomplete', () => {
    const input = ngMocks.find('input');
    const autocomplete = ngMocks.find(MatAutocomplete).componentInstance;
    expect(ngMocks.input(input, 'matAutocomplete')).toEqual(autocomplete);
  });

  it('should update formValue with manual value', () => {
    const trigger = ngMocks.find(MatAutocompleteTrigger);
    ngMocks.change(trigger, 'Two');
    fixture.detectChanges();

    const selectedOption = ngMocks.find('p');
    expect(ngMocks.formatText(selectedOption)).toEqual('Selected option: Two');
  });

  it('should update formValue with object', () => {
    const trigger = ngMocks.find(MatAutocompleteTrigger);
    ngMocks.change(trigger, { name: 'Bob' });
    fixture.detectChanges();

    const selectedOption = ngMocks.find('p');
    expect(ngMocks.formatText(selectedOption)).toEqual('Selected option: Bob');
  });

  it('should filter options', () => {
    const trigger = ngMocks.find(MatAutocompleteTrigger);
    ngMocks.change(trigger, 'Ma');
    fixture.detectChanges();

    const options = ngMocks.findAll(MatOption);
    expect(options.length).toEqual(1);
    expect(ngMocks.input(options[0], 'value')).toEqual({ name: 'Mary'});
  });

  it('should use custom display function', () => {
    const autocomplete = ngMocks.find(MatAutocomplete);
    const displayFn = ngMocks.input(autocomplete, 'displayWith');

    expect(displayFn('test')).toEqual('');
    expect(displayFn({ test: 'test'})).toEqual('');
    expect(displayFn({ name: 'test'})).toEqual('test');
  });
});
