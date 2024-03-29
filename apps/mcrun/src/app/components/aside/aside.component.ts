import {Component} from '@angular/core';

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
  ]

  onMenuClick(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    console.log('Menu clicked');
    console.log(element.getAttribute('name'));

  }


}
