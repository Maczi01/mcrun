import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports:[RouterModule]

})
export class HeaderComponent {
    title = 'McRun';
    links = [
        { path: '/', title: 'Home' },
        { path: '/runs', title: 'Runs' },
        { path: '/map', title: 'Map' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
        { path: '/training', title: 'Training & Health' },
        { path: '/statistics', title: 'Statistics' },
    ];

    constructor() {}

    onMenuClick() {
        console.log('Menu clicked');
    }
}
