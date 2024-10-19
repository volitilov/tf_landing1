import { Component } from '@angular/core';
import { CommonPropertyFilterListingComponent } from '../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing.component';
import { BreadcrumbComponent } from '../../../../../shared/components/ui/breadcrumb/breadcrumb.component';
import { pagination } from '../../../../../shared/interface/property';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { PropertyService } from '../../../../../shared/services/property.service';

@Component({
  selector: 'app-grid2-left-sidebar',
  standalone: true,
  imports: [BreadcrumbComponent, CommonPropertyFilterListingComponent],
  templateUrl: './grid2-left-sidebar.component.html',
  styleUrls: ['./grid2-left-sidebar.component.scss'],
})

export class Grid2LeftSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Left sidebar view';
  public parent = 'Listing';
  public child = 'Left sidebar view';

  public listView: boolean = false;
  public categoryValue: string;
  public paginationData: pagination;
  public totalProperty: number;
  public filterValue: string;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyBoxGridService: PropertyBoxGridService, public propertyService: PropertyService) { }

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

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }

  receivePropertyTotalData(value: number) {
    this.totalProperty = value;
  }

  getPaginationData(pagination: pagination) {
    this.paginationData = pagination;
  }

  sortFilter(value: string) {
    this.filterValue = value
  }
}
