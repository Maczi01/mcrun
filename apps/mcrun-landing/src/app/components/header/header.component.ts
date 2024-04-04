import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    title = 'McRun';

    constructor() {}

    onMenuClick() {
        console.log('Menu clicked');
    }
}
