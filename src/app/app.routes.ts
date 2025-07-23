import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then((c) => c.About),
  },
  {
    path: 'portofolio',
    loadComponent: () =>
      import('./components/portofolio/portofolio').then((c) => c.Portofolio),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact').then((c) => c.Contact),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then((c) => c.NotFound),
  },
];
