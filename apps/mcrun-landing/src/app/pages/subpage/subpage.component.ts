import {Component} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'mcrun-subpage',
  standalone: true,
  templateUrl: './analog-welcome.component.html',
  imports: [
    HeaderComponent,
  ]
})
export class SubpageComponent {
}
