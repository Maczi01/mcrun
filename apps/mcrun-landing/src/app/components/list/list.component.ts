import { Component, inject } from '@angular/core';
import { RunItemComponent } from '../run-item/run-item.component';
import { StateService } from '../../service/state.service';

@Component({
    standalone: true,
    selector: 'list-component',
    imports: [RunItemComponent],
    templateUrl: './list.component.html',
})
export class ListComponent {
  stateService = inject(StateService);

  get runs() {
    return this.stateService.getRuns();
  }

  setActiveRun(run: any): void {
    this.stateService.setActiveRun(run);
  }

}
