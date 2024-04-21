import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Run} from "../../types";
import {Router, RouterModule} from "@angular/router";

@Component({
    standalone: true,
    selector: 'run-item-component',
    templateUrl: './run-item.component.html',
    imports: [DatePipe, RouterModule],
})
export class RunItemComponent {
    @Input() run: Run;

  constructor(private router: Router) {}

  navigateToRun(runName: string): void {
    this.router.navigate([runName]);
  }
}
