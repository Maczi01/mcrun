import { Route } from '@angular/router';
import { HeaderComponent } from '@mcrun/ui';
import { ListComponent } from './components/list/list.component';

export const appRoutes: Route[] = [
    {
        path: 'runs',
        component: ListComponent,
    },
    {
        path: 'new',
        component: HeaderComponent,
    },
];
