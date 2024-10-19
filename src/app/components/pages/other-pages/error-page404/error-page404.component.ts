import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page404',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './error-page404.component.html',
  styleUrls: ['./error-page404.component.scss'],
})
export class ErrorPage404Component {
  
  public themeLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png'

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
