import { Component } from '@angular/core';
import { RunItemComponent } from '../run-item/run-item.component';

@Component({
    standalone: true,
    selector: 'list-component',
    imports: [RunItemComponent],
    templateUrl: './list.component.html',
})
export class ListComponent {}
