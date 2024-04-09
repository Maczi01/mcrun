import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";

@Component({
    selector: 'mcrun-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [HeaderComponent],
})
export default class HomePageComponent {}
