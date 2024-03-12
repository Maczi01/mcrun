import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'mcrun-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
