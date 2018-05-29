import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HistoryComponent } from './history/history.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home/home.component'
 
export const AppRoutes: Routes = [
    { 
        path: 'history', component: HistoryComponent
    },
    { 
        path: 'home', component: HomeComponent
    },
    { 
        path: 'login', component: LoginComponent
    },
    { 
        path: 'signup', component: SignupComponent
    }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);