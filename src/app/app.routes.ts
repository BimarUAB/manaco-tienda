import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { Home} from './pages/home/home';
import { Servicios } from './pages/servicios/servicios';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: Home},
      { path: 'servicios', component: Servicios },
      { path: 'contacto', component: Contacto }
    ]
  }
];