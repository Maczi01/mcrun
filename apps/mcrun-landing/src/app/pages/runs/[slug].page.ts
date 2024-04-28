import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import { Run } from '../../types';

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [AsyncPipe, MarkdownComponent],
    templateUrl: './blog.component.html',
})
export default class HomeComponent {
    readonly post$ = injectContent<Run>('slug');
}
