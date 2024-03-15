import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { ProtectedComponent } from './protected/protected.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'auth/login', component: LoginComponent },
    {path: 'auth/register', component: RegisterComponent},
    
    {path: 'unprotected', component: UnprotectedComponent },
    {path: 'protected', component: ProtectedComponent, canActivate: [authGuard] },
    
];
