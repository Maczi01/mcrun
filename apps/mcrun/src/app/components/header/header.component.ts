import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mcrun-app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    title = 'McRun';

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    onMenuClick() {
        console.log('Menu clicked');
    }
}
