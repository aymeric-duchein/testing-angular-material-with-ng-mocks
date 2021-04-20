import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { CardComponent } from './card.component';
import { CardModule } from './card.module';

describe('AutocompleteComponent', () => {
  ngMocks.faster();

  let component: CardComponent;
  let fixture: MockedComponentFixture<CardComponent>;

  beforeEach(() =>
    MockBuilder(CardComponent, CardModule)
  );
  beforeEach(() => {
    fixture = MockRender(CardComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
