import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./cleannow/pages/home-page/home-page.module').then((module) => module.HomePageModule)
            },
            {
                path: 'required',
                loadChildren: () => import('./cleannow/pages/required/required.module').then((module) => module.RequiredModule)
            },
        ]
    },
    {
        path: '',
        component: AuthComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
