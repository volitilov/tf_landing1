import { Component } from '@angular/core';
import { blogData } from '../../../shared/data/footer';
import { BreadcrumbComponent } from "../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-modules-footer',
    standalone: true,
    templateUrl: './modules-footer.component.html',
    styleUrls: ['./modules-footer.component.scss'],
    imports: [BreadcrumbComponent, FooterComponent]
})
export class ModulesFooterComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Footer';
  public parent = 'Modules';
  public child = 'Footer';

  public themeLogo2 = 'assets/images/logo/1.png';
  public footerClass = 'footer-brown';
  public blogData = blogData;

  public footerThemeLogo = 'assets/images/logo/3.png';
  public footerClass2 = 'footer-dark';
  public heartIcon = false;

  public footerLogo4 = 'assets/images/logo/4.png';
  public footerDarkLogo4 = 'assets/images/logo/9.png';


  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', '#ff5c41');
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
