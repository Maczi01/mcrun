import { Injectable } from '@angular/core';
import { Run } from '../types';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class StateService {
    runList: Run[] = [
        {
            name: 'Together around',
            place: 'Belfast',
            date: '2024-04-23',
            type: 'Flat run',
            latitude: 53.6272,
            longitude: -8.18812,
        },
        {
            name: 'Run Omagh!',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Walk',
            latitude: 53.2735,
            longitude: -7.77832032,
        },
        {
            name: 'Family run',
            place: 'Ballymena',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 53.4239,
            longitude: -7.94069,
        },
        {
            name: 'Windmill run',
            place: 'Enniskillen',
            date: '2024-05-02',
            type: 'OCR',
            latitude: 54.5092,
            longitude: -6.04676,
        },
    ];
  activeRunSubject = new BehaviorSubject<Run | null>(null);
  activeRun$ = this.activeRunSubject.asObservable();

  setActiveRun(run: Run): void {
    this.activeRunSubject.next(run);
  }

  getRuns(): Run[] {
    return this.runList;
  }
}
