import { Injectable } from '@angular/core';
import { Run } from '../types';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    runList: Run[] = [
        {
            name: 'Run Omagh!',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 53.6272,
            longitude: -8.18812,
        },
        {
            name: 'Run Omagh!',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 53.2735,
            longitude: -7.77832032,
        },
        {
            name: 'Run Omagh!',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 53.4239,
            longitude: -7.94069,
        },
        {
            name: 'Run Omagh!',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 54.5092,
            longitude: -6.04676,
        },
        {
            name: 'Run Omagh!',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 54.3466,
            longitude: -7.64167,
        },
    ];

    // private _state: string = 'default';
    //
    // get state(): string {
    //   return this._state;
    // }
    //
    // set state(value: string) {
    //   this._state = value;
    // }
}
