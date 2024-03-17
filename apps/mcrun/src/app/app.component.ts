import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
// import {HeaderComponent} from "@mcrun/ui";
import {HeaderComponent} from "./components/header/header.component";
import {AsideComponent} from "./components/aside/aside.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, AsideComponent],
  selector: 'mcrun-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}
