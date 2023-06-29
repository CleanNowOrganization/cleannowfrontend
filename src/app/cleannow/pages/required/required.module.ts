import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequiredComponent } from './required.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { RequiredRoutingModule } from './required-routing.module';

@NgModule({
    declarations: [RequiredComponent],
    imports: [CommonModule, SharedModule, RequiredRoutingModule]
})
export class RequiredModule {}