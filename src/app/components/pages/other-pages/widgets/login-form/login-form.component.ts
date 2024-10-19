import { Component } from '@angular/core';
import { FeatherIconsComponent } from "../../../../../shared/components/ui/feather-icons/feather-icons.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login-form',
    standalone: true,
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    imports: [FeatherIconsComponent,CommonModule,RouterModule]
})
export class LoginFormComponent {
  
  public isShow: boolean = false;
  public inputType: string = 'password';

  showPassword() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}
