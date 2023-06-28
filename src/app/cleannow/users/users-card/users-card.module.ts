import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersCardRoutingModule } from './users-card-routing.module';
import { UsersCardComponent } from './users-card.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import { NgbCarouselModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [UsersCardComponent],
    imports: [CommonModule, UsersCardRoutingModule, SharedModule, NgbNavModule, NgbDropdownModule, NgbCarouselModule]
})
export class UsersCardModule {}
