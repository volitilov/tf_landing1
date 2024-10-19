import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coming-soon2',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './coming-soon2.component.html',
  styleUrls: ['./coming-soon2.component.scss'],
})
export class ComingSoon2Component {

  public themeLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png'

}
