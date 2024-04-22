import {Component, Input, OnInit} from '@angular/core';
import {Run} from "../types";
import {ActivatedRoute} from "@angular/router";
import {RunsService} from "../service/run.service";

@Component({
  selector: 'subpage',
  standalone: true,
  templateUrl: './sub.component.html',
})
export default class SubComponent {
  @Input() name: string;

  // run: Run | undefined;
  //
  // constructor(
  //   private route: ActivatedRoute,
  //   private runsService: RunsService // This service is hypothetical
  // ) {}
  //
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     const runName = params.get('name');
  //     console.log('runName', runName)
  //     if (runName) {
  //       this.loadRunDetails(runName);
  //     }
  //   });
  // }
  //
  // loadRunDetails(name: string): void {
  //   // This is a simple example. You might need to handle errors or loading states.
  //   this.runsService.getRunByName(name).subscribe({
  //     next: (run) => this.run = run,
  //     error: (err) => console.error('Failed to load run details', err)
  //   });
  // }
}
