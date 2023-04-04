import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';

export const appRoutes: Route[] = [
  {
    path: 'product',
    loadChildren: () =>
      loadRemoteModule('product', './Module').then((m) => m.FeaturesModule),
  },
  {
    path: '',
    component: DashboardOverviewComponent,
  },
];
