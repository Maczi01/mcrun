import {Component} from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {MapboxMapComponent} from "../components/map/mapbox-map.component";

@Component({
  selector: 'mcrun-landing-analog-welcome',
  standalone: true,
  templateUrl: './analog-welcome.component.html',
  imports: [
    HeaderComponent,
    MapboxMapComponent
  ]
})
export class AnalogWelcomeComponent {
}
