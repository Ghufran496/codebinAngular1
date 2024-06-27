import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create', component: CreateBinComponent },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(mod => mod.AboutComponent) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  

  //this 404 page line should be at the end.
  { path: '**', component: NotFoundComponent }
];
