import { SimpleBadgeComponent } from './simple-badge.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { SimpleBadgeModule } from './simple-badge.module';

describe('SimpleBadgeComponent', () => {
  ngMocks.faster();

  let component: SimpleBadgeComponent;
  let fixture: MockedComponentFixture<SimpleBadgeComponent>;

  beforeEach(() =>
    MockBuilder(SimpleBadgeComponent, SimpleBadgeModule)
  );
  beforeEach(() => {
    fixture = MockRender(SimpleBadgeComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a badge with a 4 that does not overlap', () => {
    const firstBadge = ngMocks.find('p:nth-child(1) > span');

    expect(ngMocks.input(firstBadge, 'matBadge')).toEqual('4');
    expect(ngMocks.input(firstBadge, 'matBadgeOverlap')).toEqual('false');
  });

  it('should display a large badge with a 1', () => {
    const secondBadge = ngMocks.find('p:nth-child(2) > span');

    expect(ngMocks.input(secondBadge, 'matBadge')).toEqual('1');
    expect(ngMocks.input(secondBadge, 'matBadgeSize')).toEqual('large');
  });

  it('should display a badge with an 8 on the left and accent color', () => {
    const thirdBadge = ngMocks.find('p:nth-child(3) > button');

    expect(ngMocks.input(thirdBadge, 'matBadge')).toEqual('8');
    expect(ngMocks.input(thirdBadge, 'matBadgePosition')).toEqual('before');
    expect(ngMocks.input(thirdBadge, 'matBadgeColor')).toEqual('accent');
  });

  it('should display a badge with a 7', () => {
    const fourthBadge = ngMocks.find('p:nth-child(4) > button');

    expect(ngMocks.input(fourthBadge, 'matBadge')).toEqual('7');
    expect(ngMocks.input(fourthBadge, 'matBadgeHidden')).toEqual(false);
  });

  it('should hide the badge', () => {
    const fourthBadge = ngMocks.find('p:nth-child(4) > button');
    ngMocks.trigger(fourthBadge, 'click');
    fixture.detectChanges();

    expect(ngMocks.input(fourthBadge, 'matBadge')).toEqual('7');
    expect(ngMocks.input(fourthBadge, 'matBadgeHidden')).toEqual(true);
  });


  it('should display an icon with warning badge', () => {
    const fifthBadge = ngMocks.find('p:nth-child(5) > mat-icon');

    expect(ngMocks.input(fifthBadge, 'matBadge')).toEqual('15');
    expect(ngMocks.input(fifthBadge, 'matBadgeColor')).toEqual('warn');
  });

  it('should display an overlapping badge', () => {
    const sixthBadge = ngMocks.find('p:nth-child(6) > button');

    expect(ngMocks.input(sixthBadge, 'matBadge')).toEqual('O');
    expect(ngMocks.input(sixthBadge, 'matBadgeOverlap')).toEqual(true);
  });

  it('should change badge overlap attribute', () => {
    const sixthBadge = ngMocks.find('p:nth-child(6) > button');
    ngMocks.trigger(sixthBadge, 'click');
    fixture.detectChanges();
    expect(ngMocks.input(sixthBadge, 'matBadge')).toEqual('O');
    expect(ngMocks.input(sixthBadge, 'matBadgeOverlap')).toEqual(false);
  });

  it('should display a disabled badge', () => {
    const seventhBadge = ngMocks.find('p:nth-child(7) > button');

    expect(ngMocks.input(seventhBadge, 'matBadge')).toEqual('D');
    expect(ngMocks.input(seventhBadge, 'matBadgeDisabled')).toEqual(true);
  });

  it('should change badge disabled attribute', () => {
    const seventhBadge = ngMocks.find('p:nth-child(7) > button');
    ngMocks.trigger(seventhBadge, 'click');
    fixture.detectChanges();

    expect(ngMocks.input(seventhBadge, 'matBadge')).toEqual('D');
    expect(ngMocks.input(seventhBadge, 'matBadgeDisabled')).toEqual(false);
  });
});
