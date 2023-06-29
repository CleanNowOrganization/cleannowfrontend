import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequiredComponent } from './required.component';

const routes: Routes = [
    {
        path: '',
        component: RequiredComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequiredRoutingModule {}
