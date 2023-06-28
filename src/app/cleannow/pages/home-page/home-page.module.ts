import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../../theme/shared/shared.module';

import { UserProfileModule } from '../../users/user-profile/user-profile.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, HomePageRoutingModule, SharedModule, UserProfileModule]
})
export class HomePageModule {}
