import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent }
];
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent)
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)
      }
    ]
  }
];