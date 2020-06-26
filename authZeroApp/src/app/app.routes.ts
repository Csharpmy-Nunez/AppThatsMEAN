import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account/account.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'account', component: AccountComponent},
  { path: '**', redirectTo: '' }
];
