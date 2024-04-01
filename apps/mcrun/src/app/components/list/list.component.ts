import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mcrun-app-list-component',
    templateUrl: './list.component.html',
})
export class ListComponent {
    title = 'McRun';

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    onMenuClick() {
        console.log('Menu clicked');
    }
}
