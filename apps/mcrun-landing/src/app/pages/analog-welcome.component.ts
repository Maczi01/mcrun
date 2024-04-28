import {Component} from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {MapboxMapComponent} from "../components/map/mapbox-map.component";
import {ListComponent} from "../components/list/list.component";
import {FooterComponent} from "../components/footer/footer.component";
import {injectContentFiles} from "@analogjs/content";
// import {Run} from "../types";

// interface PostAttributes {
//   title: string;
//   slug: string;
//   description: string;
//   coverImage: string;
// }

export interface Run {
  name: string;
  slug: string;
  latitude: number;
  longitude: number;
  place: string;
  date: string;
  type: string;
  description: string;
  tags: string[];
  category: string;
  coverImage?: string;
};


@Component({
    selector: 'mcrun-landing-analog-welcome',
    standalone: true,
    templateUrl: './analog-welcome.component.html',
    imports: [HeaderComponent, MapboxMapComponent, ListComponent, FooterComponent],
})
export class AnalogWelcomeComponent {
  readonly runs = injectContentFiles<Run>();
  ngOnInit() {
    console.log('AnalogWelcomeComponent', this.runs);
  }
}

