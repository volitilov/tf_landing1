import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icons',
  standalone: true,
  imports:[],
  templateUrl: './feather-icons.component.html',
  styleUrls: ['./feather-icons.component.scss']
})
export class FeatherIconsComponent {

  @Input('icon') public icon: string | undefined;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      feather.replace();
    });
  }
}
