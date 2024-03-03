import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'mcrun-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'mcrun';
  someArray = [{
    name: 'one',
    value: 1
  }, {
    name: 'two',
    value: 2
  }];
}
