import { Component } from '@angular/core';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { BreadcrumbComponent } from "../../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { CommonPropertyFilterListingComponent } from "../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing.component";

@Component({
    selector: 'app-listing-right-sidebar',
    standalone: true,
    templateUrl: './listing-right-sidebar.component.html',
    styleUrls: ['./listing-right-sidebar.component.scss'],
    imports: [BreadcrumbComponent, CommonPropertyFilterListingComponent]
})
export class ListingRightSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Right sidebar';
  public parent = 'Listing';
  public child = 'Right sidebar';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}
  
  ngOnInit() {
    document.documentElement.style.setProperty( '--theme-default', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }
}