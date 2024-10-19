import { Component } from '@angular/core';
import { parallaxImage } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-center-slide',
  standalone : true,
  imports:[CarouselModule],
  templateUrl: './center-slide.component.html',
  styleUrls: ['./center-slide.component.scss'],
})
export class CenterSlideComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public parallaxImagesData: parallaxImage[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    center:true,
    responsive: {
      0: {
        items: 3,
      },
    },
  };

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.parallaxImagesData = response.parallaxImagesData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
