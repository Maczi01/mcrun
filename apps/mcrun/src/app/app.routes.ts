import { Route } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from '@mcrun/ui';

export const appRoutes: Route[] = [
    {
        path: 'dashboard',
        component: AsideComponent,
    },
    {
        path: 'users',
        component: HeaderComponent,
    },
];
