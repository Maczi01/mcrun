import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'mcrun-landing-analog-welcome',
  standalone: true,
  // host: {
  //   class:
  //     'flex min-h-screen flex-col text-zinc-900 bg-zinc-50 px-4 pt-8 pb-32',
  // },
  templateUrl: './analog-welcome.component.html',
  imports: [
    HeaderComponent
  ]
})
export class AnalogWelcomeComponent {
  public count = 0;
  public increment() {
    this.count++;
  }
}
