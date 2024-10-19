import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propety-location',
  standalone: true,
  imports: [],
  templateUrl: './propety-location.component.html',
  styleUrls: ['./propety-location.component.scss'],
})
export class PropetyLocationComponent {
  
  @Input() location: string;

}
