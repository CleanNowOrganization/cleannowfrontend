import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../../theme/shared/shared.module';

import { UserProfileModule } from '../../users/user-profile/user-profile.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, SharedModule, UserProfileModule],
})
export class HomePageModule {}