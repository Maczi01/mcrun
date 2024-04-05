import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
export class Run {
  name: string;
  date: string;
}
@Component({
    standalone: true,
    selector: 'run-item-component',
    templateUrl: './run-item.component.html',
    imports: [DatePipe],
})
export class RunItemComponent {
    @Input() run: Run;
}
