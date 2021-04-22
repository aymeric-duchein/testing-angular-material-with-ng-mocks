import { RegistryIconComponent, THUMBUP_ICON } from './registry-icon.component';
import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { RegistryIconModule } from './registry-icon.module';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

describe('SimpleIconComponent', () => {
  ngMocks.faster();

  let component: RegistryIconComponent;
  let fixture: MockedComponentFixture<RegistryIconComponent>;

  const mockRegistry = {
    addSvgIconLiteral: jasmine.createSpy()
  };
  const mockDomSanitizer = {
    bypassSecurityTrustHtml: jasmine.createSpy().and.returnValue('Sanitized')
  };

  beforeEach(() =>
    MockBuilder(RegistryIconComponent, RegistryIconModule)
      .mock(MatIconRegistry, mockRegistry)
      .mock(DomSanitizer, mockDomSanitizer)
  );
  beforeEach(() => {
    fixture = MockRender(RegistryIconComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an icon', () => {
    const icon = ngMocks.find('mat-icon');
    expect(ngMocks.input(icon, 'svgIcon')).toEqual('thumbs-up');
    expect(mockDomSanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(THUMBUP_ICON);
    expect(mockRegistry.addSvgIconLiteral).toHaveBeenCalledWith('thumbs-up', 'Sanitized');
  });
});
