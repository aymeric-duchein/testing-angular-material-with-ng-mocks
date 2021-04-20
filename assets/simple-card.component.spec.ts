import { SimpleCardComponent } from './simple-card.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleCardModule } from './simple-card.module';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

describe('SimpleButtonComponent', () => {
  ngMocks.faster();

  let component: SimpleCardComponent;
  let fixture: MockedComponentFixture<SimpleCardComponent>;

  beforeEach(() =>
    MockBuilder(SimpleCardComponent, SimpleCardModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleCardComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a card', () => {
    expect(ngMocks.find(MatCard)).toBeDefined();
  });

  it('should display a header with a title and subtitle', () => {
    const header = ngMocks.find(MatCardHeader);
    expect(header).toBeDefined();

    const avatar = ngMocks.find(MatCardAvatar);
    expect(avatar).toBeDefined();

    const title = ngMocks.find(MatCardTitle);
    expect(ngMocks.formatText(title)).toContain('Shiba Inu');

    const subTitle = ngMocks.find(MatCardSubtitle);
    expect(ngMocks.formatText(subTitle)).toContain('Dog Breed');
  });

  it('should display the content of the card', () => {
    const content = ngMocks.find(MatCardContent);
    expect(content).toBeDefined();
    expect(ngMocks.formatText(content))
    .toContain('The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.');
  });

  it('should display two actions buttons', () => {
    const actions = ngMocks.find(MatCardActions);
    const buttons = ngMocks.findAll(actions, MatButton);

    expect(buttons.length).toEqual(2);
    expect(ngMocks.formatText(buttons[0])).toContain('LIKE');
    expect(ngMocks.formatText(buttons[1])).toContain('SHARE');
  });
});
