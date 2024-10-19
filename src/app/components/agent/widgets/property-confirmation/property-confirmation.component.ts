import { Component } from '@angular/core';

@Component({
  selector: 'app-property-confirmation',
  standalone: true,
  imports:[],
  templateUrl: './property-confirmation.component.html',
  styleUrls: ['./property-confirmation.component.scss']
})
export class PropertyConfirmationComponent {


  submit(){
    window.location.reload();
  }
}
