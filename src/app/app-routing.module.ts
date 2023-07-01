import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { LandingPageComponent } from './theme/layout/landing-page/landing-page.component';
import { ErrorComponent } from './cleannow/pages/error/error.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./cleannow/pages/container/container.module').then((module) => module.ContainerModule)
            },
            {
                path: 'login',
                loadChildren: () => import('./cleannow/pages/signin/signin.module').then((module) => module.SigninModule)
            },
        ]
    },
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
        path: '**',
        component: ErrorComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
