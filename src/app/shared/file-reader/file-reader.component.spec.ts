import { FileReaderComponent } from './file-reader.component';
import { FileReaderModule } from './file-reader.module';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';

describe('FileReaderComponent', () => {
  ngMocks.faster();

  let component: FileReaderComponent;
  let fixture: MockedComponentFixture<FileReaderComponent>;

  beforeEach(() =>
    MockBuilder(FileReaderComponent, FileReaderModule)
  );
  beforeEach(() => {
    fixture = MockRender(FileReaderComponent, { fileName: 'fileName' });
    component = fixture.point.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set src tag to assets/fileName', () => {
    const markdown = ngMocks.find('markdown');
    expect(ngMocks.input(markdown, 'src')).toEqual('assets/fileName');
  });

  it('should display lineNumbers', () => {
    const markdown = ngMocks.find('markdown[lineNumbers]');
    expect(markdown).toBeDefined();
  });
});
