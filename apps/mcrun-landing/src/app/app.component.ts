import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
    selector: 'mcrun-landing-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    template: `
    <app-header></app-header>
        <router-outlet></router-outlet>
    <app-footer></app-footer>
    `,
})
export class AppComponent {}
