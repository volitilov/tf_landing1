import { Component } from '@angular/core';
import { FeatherIconsComponent } from "../../../../../shared/components/ui/feather-icons/feather-icons.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sign-up-form',
    standalone: true,
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss'],
    imports: [FeatherIconsComponent,CommonModule,RouterModule]
})
export class SignUpFormComponent {

  public isShow: boolean = false;
  public inputType: string = 'password';

  showPassword(){
    this.isShow =! this.isShow;
    if(this.isShow){
      this.inputType = 'text'
    }else{
      this.inputType ='password'
    }
  }
}
