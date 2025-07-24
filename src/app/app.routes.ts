import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((c) => c.Home),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then((c) => c.About),
    title: 'About',
  },
  {
    path: 'portofolio',
    loadComponent: () =>
      import('./components/portofolio/portofolio').then((c) => c.Portofolio),
    title: 'Portofolio',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact').then((c) => c.Contact),
    title: 'Contact',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then((c) => c.NotFound),
    title: 'Not Found',
  },
];
