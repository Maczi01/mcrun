import { Injectable } from '@angular/core';
import { Run } from '../types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    runList: Run[] = [
        {
            name: 'Together around',
            slug: 'together-around',
            place: 'Belfast',
            date: '2024-04-23',
            type: 'Flat run',
            latitude: 53.6272,
            longitude: -8.18812,
            description: 'A run for everyone',
            tags: ['family', 'fun'],
            category: 'fun',

        },
        {
            name: 'Run Omagh!',
            slug: 'run-omagh',
            place: 'Omagh',
            date: '2024-05-02',
            type: 'Walk',
            latitude: 53.2735,
            longitude: -7.77832032,
            description: 'A walk for everyone',
            tags: ['family', 'fun'],
            category: 'walk',
        },
        {
            name: 'Family run',
            slug: 'family-run',
            place: 'Ballymena',
            date: '2024-05-02',
            type: 'Flat run',
            latitude: 53.4239,
            longitude: -7.94069,
            description: 'A run for everyone',
            tags: ['family', 'fun'],
            category: 'fun',
        },
        {
            name: 'Windmill run',
            slug: 'windmill-run',
            place: 'Enniskillen',
            date: '2024-05-02',
            type: 'OCR',
            latitude: 54.5092,
            longitude: -6.04676,
            description: 'A run for everyone',
            tags: ['family', 'fun'],
            category: 'ocr',
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
