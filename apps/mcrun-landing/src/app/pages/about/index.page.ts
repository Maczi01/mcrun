import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
    selector: 'mcrun-landing-home',
    standalone: true,
    templateUrl: './about.component.html',
    imports: [HeaderComponent],
})
export default class HomePageComponent {}
