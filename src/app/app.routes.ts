import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/home.component';
import { SubrouteComponent } from './subroute/subroute.component';
import {AuthGuard} from './security/auth.guard'


export const ROUTES: Routes = [
  { path: '', component: LoginComponent},
 { path: 'login', component: LoginComponent },

  { path: 'operation', component: SubrouteComponent ,canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }

  
];


 