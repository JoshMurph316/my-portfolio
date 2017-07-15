import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ExitComponent } from "./exit/exit.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'exit', component: ExitComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);