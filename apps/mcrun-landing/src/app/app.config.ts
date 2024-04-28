import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
// import {withComponentInputBinding} from "@angular/router";
import {provideContent, withMarkdownRenderer} from "@analogjs/content";

export const appConfig: ApplicationConfig = {
  providers: [
    // provideFileRouter(withComponentInputBinding()),
    // provideFileRouter(),
    // provideClientHydration(),
    // provideHttpClient(withFetch()),
    // provideContent(withMarkdownRenderer()),
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideContent(withMarkdownRenderer()),

  ],
};
