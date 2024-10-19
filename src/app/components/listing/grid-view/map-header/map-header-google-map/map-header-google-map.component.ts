import { Component } from '@angular/core';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonPropertyFilterListingComponent } from "../../../../../shared/components/common/widgets/common-property-filter-listing/common-property-filter-listing.component";

@Component({
    selector: 'app-map-header-google-map',
    standalone: true,
    templateUrl: './map-header-google-map.component.html',
    styleUrls: ['./map-header-google-map.component.scss'],
    imports: [GoogleMapsModule, CommonPropertyFilterListingComponent]
})
export class MapHeaderGoogleMapComponent {
  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 25.276987, lng: 55.296249 },
    zoom: 6
  };

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3',this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4',this.theme_default4);

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