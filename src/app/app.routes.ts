import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'replace',
    loadComponent: () =>
      import('./pages/replace/replace.page').then((m) => m.ReplacePage),
  },
  {
    path: 'track',
    loadComponent: () =>
      import('./pages/track/track.page').then((m) => m.TrackPage),
  },
  {
    path: 'see',
    loadComponent: () => import('./pages/see/see.page').then((m) => m.SeePage),
  },
  {
    path: 'when',
    loadComponent: () =>
      import('./pages/when/when.page').then((m) => m.WhenPage),
  },
  {
    path: 'pay',
    loadComponent: () => import('./pages/pay/pay.page').then((m) => m.PayPage),
  },
  {
    path: 'update',
    loadComponent: () =>
      import('./pages/update/update.page').then((m) => m.UpdatePage),
  },
  {
    path: 'send',
    loadComponent: () =>
      import('./pages/send/send.page').then((m) => m.SendPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
