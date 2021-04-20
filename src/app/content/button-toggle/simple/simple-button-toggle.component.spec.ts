import { SimpleButtonToggleComponent } from './simple-button-toggle.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleButtonToggleModule } from './simple-button-toggle.module';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

describe('SimpleButtonToggleComponent', () => {
  ngMocks.faster();

  let component: SimpleButtonToggleComponent;
  let fixture: MockedComponentFixture<SimpleButtonToggleComponent>;

  beforeEach(() =>
    MockBuilder(SimpleButtonToggleComponent, SimpleButtonToggleModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleButtonToggleComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display four buttons', () => {
    const buttons = ngMocks.findAll(MatButtonToggle);

    expect(buttons.length).toEqual(4);
    expect(ngMocks.formatText(buttons[0])).toEqual('format_align_left');
    expect(ngMocks.input(buttons[0], 'value')).toEqual('left');
    expect(ngMocks.formatText(buttons[1])).toEqual('format_align_center');
    expect(ngMocks.input(buttons[1], 'value')).toEqual('center');
    expect(ngMocks.formatText(buttons[2])).toEqual('format_align_right');
    expect(ngMocks.input(buttons[2], 'value')).toEqual('right');
    expect(ngMocks.formatText(buttons[3])).toEqual('format_align_justify');
    expect(ngMocks.input(buttons[3], 'value')).toEqual('justify');
    expect(ngMocks.input(buttons[3], 'disabled')).toBeDefined();
  });

  it('should select center value', () => {
    const group = ngMocks.findInstance(MatButtonToggleGroup);
    group.value = 'center';

    fixture.detectChanges();
    const display = ngMocks.find('p');
    expect(ngMocks.formatText(display)).toContain('center');
  });
});
