import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'mcrun-app-aside',
    imports: [RouterLink],
    templateUrl: './aside.component.html',
})
export class AsideComponent {
    menuItems = [
        {
            title: 'Create new run',
            url: '/new',
        },
        {
            title: 'Runs',
            url: '/runs',
        },
    ];

    onMenuClick(menuTitle: string): void {
        console.log('Menu clicked:', menuTitle);
    }
}
