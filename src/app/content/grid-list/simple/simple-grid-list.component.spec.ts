import { SimpleGridListComponent } from './simple-grid-list.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleGridListModule } from './simple-grid-list.module';

describe('SimpleGridListComponent', () => {
  ngMocks.faster();

  let component: SimpleGridListComponent;
  let fixture: MockedComponentFixture<SimpleGridListComponent>;

  beforeEach(() =>
    MockBuilder(SimpleGridListComponent, SimpleGridListModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleGridListComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a 4 grid tiles', () => {
    const gridTiles = ngMocks.findAll('mat-grid-tile');
    expect(gridTiles.length).toEqual(4);

    expect(ngMocks.input(gridTiles[0], 'colspan')).toEqual(3);
    expect(ngMocks.input(gridTiles[0], 'rowspan')).toEqual(1);
    expect(ngMocks.formatText(gridTiles[0])).toEqual('One');
    expect(gridTiles[0].nativeElement.style.background).toEqual('lightblue');

    expect(ngMocks.input(gridTiles[1], 'colspan')).toEqual(1);
    expect(ngMocks.input(gridTiles[1], 'rowspan')).toEqual(2);
    expect(ngMocks.formatText(gridTiles[1])).toEqual('Two');
    expect(gridTiles[1].nativeElement.style.background).toEqual('lightgreen');

    expect(ngMocks.input(gridTiles[2], 'colspan')).toEqual(1);
    expect(ngMocks.input(gridTiles[2], 'rowspan')).toEqual(1);
    expect(ngMocks.formatText(gridTiles[2])).toEqual('Three');
    expect(gridTiles[2].nativeElement.style.background).toEqual('lightpink');

    expect(ngMocks.input(gridTiles[3], 'colspan')).toEqual(2);
    expect(ngMocks.input(gridTiles[3], 'rowspan')).toEqual(1);
    expect(ngMocks.formatText(gridTiles[3])).toEqual('Four');
    expect(gridTiles[3].nativeElement.style.background).toEqual('rgb(221, 189, 241)');
  });

  it('should display a grid tile', () => {
    const grid = ngMocks.find('mat-grid-list');

    expect(ngMocks.input(grid, 'cols')).toEqual('4');
    expect(ngMocks.input(grid, 'rowHeight')).toEqual('100px');
  });
});
