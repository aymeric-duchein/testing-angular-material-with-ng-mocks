import { BasicListComponent } from './basic-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { BasicListModule } from './basic-list.module';

describe('BasicListComponent', () => {
  ngMocks.faster();

  let component: BasicListComponent;
  let fixture: MockedComponentFixture<BasicListComponent>;

  beforeEach(() => MockBuilder(BasicListComponent, BasicListModule));
  beforeEach(() => {
    fixture = MockRender(BasicListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain first item content', () => {
    const firstItem = ngMocks.find('mat-list-item:first-child');
    expect(ngMocks.formatText(firstItem)).toContain('Item 1');
  });

  it('should contain second item content', () => {
    const secondItem = ngMocks.find('mat-list-item:nth-child(2)');
    expect(ngMocks.formatText(secondItem)).toContain('Item 2');
  });

  it('should contain third item content', () => {
    const thirdItem = ngMocks.find('mat-list-item:last-child');
    expect(ngMocks.formatText(thirdItem)).toContain('Item 3');
  });
});
