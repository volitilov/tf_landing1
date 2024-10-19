import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../../../shared/components/ui/breadcrumb/breadcrumb.component";
import { SignUpFormComponent } from "../widgets/sign-up-form/sign-up-form.component";

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    imports: [BreadcrumbComponent, SignUpFormComponent]
})
export class SignUpComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Sign Up';
  public parent = 'Home';
  public child = 'Sign Up';

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
