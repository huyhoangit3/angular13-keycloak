import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [EditProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
