import { Component } from '@angular/core';
import { gridImage } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { BreadcrumbComponent } from '../../../../shared/components/ui/breadcrumb/breadcrumb.component';
import { CommonGridImagesComponent } from '../widgets/common-grid-images/common-grid-images.component';
import { GridTabComponent } from '../widgets/grid-tab/grid-tab.component';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-grid4',
  standalone: true,
  imports: [BreadcrumbComponent, GridTabComponent, CommonGridImagesComponent,LightboxModule],
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.scss'],
})

export class Grid4Component {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Portfolio';
  public parent = 'Home';
  public child = 'Portfolio';
  public activeTab: string = 'all';

  public gridImagesData: gridImage[];
  public imagesData: gridImage[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.imagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );

      this.gridImagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  receiveChildData(data: gridImage[]) {
    this.imagesData = data;
  }
}
