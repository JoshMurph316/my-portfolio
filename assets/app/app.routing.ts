import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ExitComponent } from "./exit/exit.component";
import { GuruBlogComponent } from "./guru-blog/guru-blog.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'exit', component: ExitComponent},
    {path: 'blog', component: GuruBlogComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);