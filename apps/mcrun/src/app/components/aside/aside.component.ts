import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mcrun-app-aside',
    templateUrl: './aside.component.html',
})
export class AsideComponent {
    menuItems = [
        {
            title: 'Create new run',
            url: '/dashboard',
        },
        {
            title: 'Runs',
            url: '/users',
        },
    ];

    onMenuClick(menuTitle: string): void {
        console.log('Menu clicked:', menuTitle);
    }
}
