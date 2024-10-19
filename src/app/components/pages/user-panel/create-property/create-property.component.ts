import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { UserInfoComponent } from "../widgets/user-info/user-info.component";
import { UserPanelSideMenuComponent } from "../widgets/user-panel-side-menu/user-panel-side-menu.component";
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { AddressComponent } from './address/address.component';
import { PropertyGalleryComponent } from '../../../agent/widgets/property-gallery/property-gallery.component';

@Component({
    selector: 'app-create-property',
    standalone: true,
    templateUrl: './create-property.component.html',
    styleUrls: ['./create-property.component.scss'],
    imports: [BreadcrumbComponent, UserInfoComponent, UserPanelSideMenuComponent,
      BasicInformationComponent,AddressComponent,PropertyGalleryComponent
    ]
})

export class CreatePropertyComponent {
  
  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Dashboard';
  public parent = 'Home';
  public child = 'Create Property';

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
