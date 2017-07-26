import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/home.component';
import { SubrouteComponent } from './subroute/subroute.component';


export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'subroute', component: SubrouteComponent }
];