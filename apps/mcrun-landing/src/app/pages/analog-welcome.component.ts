import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MapboxMapComponent } from '../components/map/mapbox-map.component';
import { ListComponent } from '../components/list/list.component';
import { FooterComponent } from '../components/footer/footer.component';
import {ContentFile, injectContentFiles} from '@analogjs/content';
import { MapSettingsBarComponent } from '../components/map-settings-bar/map-settings-bar';
import { Run } from '../types';
import { DropdownComponent } from '../components/dropdown/dropdown';

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
        DropdownComponent,
    ],
})
export class AnalogWelcomeComponent {
    readonly runs = injectContentFiles<Run>();

    filteredRuns: ContentFile<Run>[] = [];

    handleCountyChange(event: string): void {
        this.filteredRuns = this.runs.filter(
            ({ attributes }) => attributes.county.toLowerCase() === event.toLowerCase(),
        );
    }
}
