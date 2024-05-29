import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TermsAndConditionsComponent } from "./components/TermsAndconditions/TermsAndconditions.component"; // Updated import path
import { RegistrationComponent } from './components/Registration/Registration.component'; // Updated import path
import { LoginOtpComponent } from './components/login-otp/login-otp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { RegistrationFailedComponent } from './components/registration-failed/registration-failed.component';
export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'terms-and-conditions', // Updated path to use kebab-case
        component: TermsAndConditionsComponent // Updated component name
    },
    {
        path: 'registration', // Assuming dashboard is now registration
        component: RegistrationComponent // Updated component name
    },
    {
        path: 'services',
        component: LoginComponent
    },
    {
        path: 'loginotp',
        component: LoginOtpComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'restrationsuccess',
        component: RegistrationSuccessComponent
    },
    {
        path: 'restrationsuccess',
        component: RegistrationFailedComponent
    }
]