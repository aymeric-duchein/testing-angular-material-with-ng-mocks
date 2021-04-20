import { NgModelButtonToggleComponent } from './ngModel-button-toggle.component';
import { isMockControlValueAccessor, MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { NgModelButtonToggleModule } from './ngModel-button-toggle.module';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

describe('NgModelButtonToggleComponent', () => {
  ngMocks.faster();

  let component: NgModelButtonToggleComponent;
  let fixture: MockedComponentFixture<NgModelButtonToggleComponent>;

  beforeEach(() =>
    MockBuilder(NgModelButtonToggleComponent, NgModelButtonToggleModule)
  );
  beforeEach(() => {
    fixture = MockRender(NgModelButtonToggleComponent);
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

  it('should select bold value', () => {
    const group = ngMocks.find(MatButtonToggleGroup);
    ngMocks.change(group, 'bold');
    fixture.detectChanges();

    const display = ngMocks.find('p');
    expect(ngMocks.formatText(display)).toContain('bold');
  });
});
