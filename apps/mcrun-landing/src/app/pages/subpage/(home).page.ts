import { Component } from '@angular/core';
import {SubpageComponent} from "./subpage.component";


@Component({
  selector: 'mcrun-landing-home',
  standalone: true,
  imports: [SubpageComponent],
  template: ` <mcrun-subpage /> `,
})
export default class HomeComponent {}
