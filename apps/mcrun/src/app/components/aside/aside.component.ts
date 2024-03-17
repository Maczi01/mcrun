import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'mcrun-app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  title = 'McRun';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }

  onMenuClick() {
    console.log('Menu clicked');
  }
}
