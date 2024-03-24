import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from '../analog-welcome.component';

@Component({
  selector: 'mcrun-landing-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <mcrun-landing-analog-welcome /> `,
})
export default class HomeComponent {}
