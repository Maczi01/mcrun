import {Component, Input, OnInit} from '@angular/core';
import {Run} from "../../types";
import {ActivatedRoute} from "@angular/router";
import {RunsService} from "../../service/run.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {injectContent, MarkdownComponent} from "@analogjs/content";
export interface ProjectAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}
@Component({
  selector: 'subpage',
  standalone: true,
  templateUrl: '../sub.component.html',
  imports: [MarkdownComponent, AsyncPipe, NgIf],
})
export default class SubComponent {
  // @Input() name: string;

  readonly project$ = injectContent<ProjectAttributes>({
    param: 'slug',
    subdirectory: 'projects',
  });
}
