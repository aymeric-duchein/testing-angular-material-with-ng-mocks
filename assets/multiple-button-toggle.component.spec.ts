import { MultipleButtonToggleComponent } from './multiple-button-toggle.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { MultipleButtonToggleModule } from './multiple-button-toggle.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

describe('FormButtonToggleComponent', () => {
  ngMocks.faster();

  let component: MultipleButtonToggleComponent;
  let fixture: MockedComponentFixture<MultipleButtonToggleComponent>;

  beforeEach(() =>
    MockBuilder(MultipleButtonToggleComponent, MultipleButtonToggleModule)
      .keep(ReactiveFormsModule)
  );
  beforeEach(() => {
    fixture = MockRender(MultipleButtonToggleComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display three buttons', () => {
    const buttons = ngMocks.findAll(MatButtonToggle);

    expect(buttons.length).toEqual(3);
    expect(ngMocks.formatText(buttons[0])).toEqual('Bold');
    expect(ngMocks.input(buttons[0], 'value')).toEqual('bold');
    expect(ngMocks.formatText(buttons[1])).toEqual('Italic');
    expect(ngMocks.input(buttons[1], 'value')).toEqual('italic');
    expect(ngMocks.formatText(buttons[2])).toEqual('Underline');
    expect(ngMocks.input(buttons[2], 'value')).toEqual('underline');
  });

  it('should have multiple attribute', () => {
    const group = ngMocks.find(MatButtonToggleGroup);

    expect(ngMocks.input(group, 'multiple')).toBeDefined();
  });

  it('should select bold value', () => {
    const group = ngMocks.find(MatButtonToggleGroup);
    ngMocks.change(group, [ 'bold', 'underline' ]);
    fixture.detectChanges();

    const display = ngMocks.find('p');
    expect(ngMocks.formatText(display)).toContain('bold,underline');
  });
});
