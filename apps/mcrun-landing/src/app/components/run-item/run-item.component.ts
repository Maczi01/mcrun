import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Run } from '../../types';
import { Router, RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'run-item-component',
    templateUrl: './run-item.component.html',
    imports: [DatePipe, RouterModule],
})
export class RunItemComponent {
    // @ts-ignore
    @Input() run: Run;


    constructor(private router: Router) {
    }

    navigateToRun(slug: string): void {
        this.router.navigate(['/runs', slug]);
    }
}
