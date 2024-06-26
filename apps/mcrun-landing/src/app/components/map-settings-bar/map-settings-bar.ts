import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown';

@Component({
    standalone: true,
    selector: 'mcrun-landing-map-settings-bar',
    templateUrl: './map-settings-bar.html',
    imports: [DropdownComponent],
})
export class MapSettingsBarComponent {

  @Output() handleCountyChange = new EventEmitter<string>();


  countiesIreland = [
        'Carlow',
        'Cavan',
        'Clare',
        'Cork',
        'Donegal',
        'Dublin',
        'Galway',
        'Kerry',
        'Kildare',
        'Kilkenny',
        'Laois',
        'Leitrim',
        'Limerick',
        'Longford',
        'Louth',
        'Mayo',
        'Meath',
        'Monaghan',
        'Offaly',
        'Roscommon',
        'Sligo',
        'Tipperary',
        'Waterford',
        'Westmeath',
        'Wexford',
        'Wicklow',
    ];
    countiesNorthernIreland = ['Antrim', 'Armagh', 'Down', 'Fermanagh', 'Londonderry', 'Tyrone'];
    counties = [...this.countiesIreland, ...this.countiesNorthernIreland].sort();
    countiesLabel = 'County';
    runTypes = ['Road', 'Trail', 'Track', 'Treadmill', 'Virtual'];
    runTypeLabel = 'Run Type';

    onCountyChange(event: string): void {
        this.handleCountyChange.emit(event);
        console.log('settings-bar settings-bar:', event);
    }
}
