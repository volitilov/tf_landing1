import { Component } from '@angular/core';
import { brand } from '../../../shared/interface/property';
import { PropertyService } from '../../../shared/services/property.service';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { BrandComponent } from "../../../shared/components/common/brand/brand.component";

@Component({
    selector: 'app-modules-brand',
    standalone: true,
    templateUrl: './modules-brand.component.html',
    styleUrls: ['./modules-brand.component.scss'],
    imports: [BreadcrumbComponent, BrandComponent]
})

export class ModulesBrandComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Brand';
  public parent = 'Modules';
  public child = 'Brand';

  public brandTitle1 = 'enterprise';
  public brandTitle2 = 'image_content';
  public brandTitle3 = 'classic';

  public brandData1: brand[] = [];
  public brandData2: brand[] = [];
  public brandData3: brand[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.brandData().subscribe((response) => {
      this.brandData1 = response.brand.filter((item) => item.type == this.brandTitle1);
      this.brandData2 = response.brand.filter((item) => item.type == this.brandTitle2);
      this.brandData3 = response.brand.filter((item) => item.type == this.brandTitle3);
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
