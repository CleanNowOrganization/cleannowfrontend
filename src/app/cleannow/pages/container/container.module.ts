import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container.component';
import { SharedModule } from '../../../theme/shared/shared.module';

const routes: Routes = [
    { path: '', component: ContainerComponent }
];

@NgModule({
    imports: [CommonModule, SharedModule,
        RouterModule.forChild(routes),
      ],
    declarations: [ContainerComponent],
})
export class ContainerModule {}