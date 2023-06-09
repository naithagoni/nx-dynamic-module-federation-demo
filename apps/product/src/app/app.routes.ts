import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
];
