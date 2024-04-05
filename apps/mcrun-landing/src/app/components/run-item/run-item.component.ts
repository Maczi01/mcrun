import {Component, Input} from '@angular/core';
export class Run {
  name: string;
  date: string;
}
@Component({
  standalone: true,
  selector: 'run-item-component',
  templateUrl: './run-item.component.html',
})
export class RunItemComponent {
  @Input() run: Run;
}
