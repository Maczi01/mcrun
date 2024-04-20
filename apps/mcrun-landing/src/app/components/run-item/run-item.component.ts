import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Run} from "../../types";

@Component({
    standalone: true,
    selector: 'run-item-component',
    templateUrl: './run-item.component.html',
    imports: [DatePipe],
})
export class RunItemComponent {
    @Input() run: Run;

    constructor(run: Run) {
        this.run = run;
    }
}
