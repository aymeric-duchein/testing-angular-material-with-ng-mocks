import { SimpleAutocompleteComponent } from './simple-autocomplete.component';
import { isMockControlValueAccessor, MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleAutocompleteModule } from './simple-autocomplete.module';
import { MatOption } from '@angular/material/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('SimpleAutocompleteComponent', () => {
  ngMocks.faster();

  let component: SimpleAutocompleteComponent;
  let fixture: MockedComponentFixture<SimpleAutocompleteComponent>;

  beforeEach(() =>
    MockBuilder(SimpleAutocompleteComponent, SimpleAutocompleteModule)
    .keep(ReactiveFormsModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleAutocompleteComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display nothing', () => {
    const selectedOption = ngMocks.find('p');
    expect(ngMocks.formatText(selectedOption)).toEqual('Selected option:');
  });

  it('should display all options', () => {
    const options = ngMocks.findAll(MatOption);
    expect(options.length).toEqual(3);
    expect(ngMocks.input(options[0], 'value')).toEqual('One');
    expect(ngMocks.formatText(options[0])).toEqual('One');
  });

  it('should link input to autocomplete', () => {
    const input = ngMocks.find('input');
    const autocomplete = ngMocks.find(MatAutocomplete).componentInstance;
    expect(ngMocks.input(input, 'matAutocomplete')).toEqual(autocomplete);
  });

  it('should update formValue', () => {
    const trigger = ngMocks.findInstance(
      MatAutocompleteTrigger
    );

    if (isMockControlValueAccessor(trigger)) {
      trigger.__simulateChange('Two');
    }

    fixture.detectChanges();

    const selectedOption = ngMocks.find('p');
    expect(ngMocks.formatText(selectedOption)).toEqual('Selected option: Two');
  });

  it('should disable the form', () => {
    const toggle = ngMocks.find('mat-slide-toggle');
    ngMocks.trigger(toggle, 'toggleChange');

    fixture.detectChanges();
    const input = ngMocks.find('input');
    expect(ngMocks.input(input, 'formControl').disabled).toBeTrue();
  });

  it('should enable the form', () => {
    const toggle = ngMocks.find('mat-slide-toggle');
    ngMocks.trigger(toggle, 'toggleChange');
    fixture.detectChanges();

    ngMocks.trigger(toggle, 'toggleChange');
    fixture.detectChanges();

    const input = ngMocks.find('input');
    expect(ngMocks.input(input, 'formControl').disabled).toBeFalse();
  });
});
