import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mcrun-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="wrapper">
          <div class="container">
              <!--  WELCOME  -->
              <div id="welcome">
                  <h1 class="text-3xl text-yellow-500 font-bold underline">
                      Hello world!
                  </h1>
              </div>
          </div>
      </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
