import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home').then(m => m.HomeComponent)
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./pages/servicios/servicios').then(m => m.ServiciosComponent)
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/contacto/contacto').then(m => m.ContactoComponent)
      }
    ]
  }
];