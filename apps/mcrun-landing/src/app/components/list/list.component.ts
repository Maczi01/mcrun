import {Component, inject, Input} from '@angular/core';
import { RunItemComponent } from '../run-item/run-item.component';
import {Run} from "../../types";
import { StateService } from '../../service/state.service';
// import {Run} from "../../types";
// import {a} from "vitest/dist/reporters-MmQN-57K";

@Component({
    standalone: true,
    selector: 'list-component',
    imports: [RunItemComponent],
    templateUrl: './list.component.html',
})
export class ListComponent {

  @Input() runs: any[];

  stateService = inject(StateService);

  setActiveRun(run: any): void {
    this.stateService.setActiveRun(run);
  }

}
