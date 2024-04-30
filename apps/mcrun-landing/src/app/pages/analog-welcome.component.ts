import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MapboxMapComponent } from '../components/map/mapbox-map.component';
import { ListComponent } from '../components/list/list.component';
import { FooterComponent } from '../components/footer/footer.component';
import { injectContentFiles } from '@analogjs/content';
import { MapSettingsBarComponent } from '../components/map-settings-bar/map-settings-bar';
import { Run } from '../types';

@Component({
    selector: 'mcrun-landing-analog-welcome',
    standalone: true,
    templateUrl: './analog-welcome.component.html',
    imports: [
        HeaderComponent,
        MapboxMapComponent,
        ListComponent,
        FooterComponent,
        MapSettingsBarComponent,
    ],
})
export class AnalogWelcomeComponent {
    readonly runs = injectContentFiles<Run>();

  filteredRuns: Run[] = [];

  handleCountyChange(event: Event): void {
    console.log('Selected county:', event)
    this.filteredRuns = this.runs.filter(run => run.attributes.county === event.target.value);
  }

}
