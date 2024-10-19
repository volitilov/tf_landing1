import { Component, Input } from '@angular/core';
import { propertyBrief, propertyDetails } from '../../../../shared/interface/property';

@Component({
  selector: 'app-property-brief',
  standalone: true,
  imports: [],
  templateUrl: './property-brief.component.html',
  styleUrls: ['./property-brief.component.scss'],
})
export class PropertyBriefComponent {

  @Input() propertyBriefData: propertyBrief[];
  @Input() propertyDetailsData: propertyDetails[];

}
