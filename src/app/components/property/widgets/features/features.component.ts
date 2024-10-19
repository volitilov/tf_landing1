import { Component, Input } from '@angular/core';
import { featuresData } from '../../../../shared/interface/property';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {

  @Input() featuresData: featuresData[];

}
