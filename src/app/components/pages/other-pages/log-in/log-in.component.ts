import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../shared/components/ui/breadcrumb/breadcrumb.component';
import { LoginFormComponent } from '../widgets/login-form/login-form.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [BreadcrumbComponent,LoginFormComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})

export class LogInComponent {
  
  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Log In';
  public parent = 'Home';
  public child = 'Log In';

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
