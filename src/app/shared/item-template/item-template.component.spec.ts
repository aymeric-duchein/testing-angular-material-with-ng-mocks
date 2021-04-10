import { ItemTemplateComponent } from './item-template.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ItemTemplateModule } from './item-template.module';

describe('ItemTemplateComponent', () => {
  ngMocks.faster();

  let component: ItemTemplateComponent;
  let fixture: MockedComponentFixture<ItemTemplateComponent>;

  beforeEach(() =>
    MockBuilder(ItemTemplateComponent, ItemTemplateModule)
  );
  beforeEach(() => {
    fixture = MockRender(ItemTemplateComponent, {
      htmlFile: 'htmlPath',
      tsFile: 'tsPath',
      specFile: 'specPath',
    });
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 tabs', () => {
    const tabs = ngMocks.findAll('mat-tab');
    expect(tabs.length).toEqual(4);
    expect(ngMocks.input(tabs[0], 'label')).toEqual('Overview');
    expect(ngMocks.input(tabs[1], 'label')).toEqual('HTML');
    expect(ngMocks.input(tabs[2], 'label')).toEqual('TS');
    expect(ngMocks.input(tabs[3], 'label')).toEqual('SPEC');
  });

  it('should display html file', () => {
    const htmlFileReader = ngMocks.find('mat-tab:nth-child(2) > app-file-reader');
    expect(ngMocks.input(htmlFileReader, 'fileName')).toEqual('htmlPath');
  });

  it('should display ts file', () => {
    const htmlFileReader = ngMocks.find('mat-tab:nth-child(3) > app-file-reader');
    expect(ngMocks.input(htmlFileReader, 'fileName')).toEqual('tsPath');
  });

  it('should display spec file', () => {
    const htmlFileReader = ngMocks.find('mat-tab:last-child > app-file-reader');
    expect(ngMocks.input(htmlFileReader, 'fileName')).toEqual('specPath');
  });
});
