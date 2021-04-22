import { SimpleIconComponent } from './simple-icon.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleIconModule } from './simple-icon.module';

describe('SimpleIconComponent', () => {
  ngMocks.faster();

  let component: SimpleIconComponent;
  let fixture: MockedComponentFixture<SimpleIconComponent>;

  beforeEach(() =>
    MockBuilder(SimpleIconComponent, SimpleIconModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleIconComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an icon', () => {
    const icon = ngMocks.find('mat-icon');
    expect(ngMocks.formatText(icon)).toEqual('home');
  });
});
