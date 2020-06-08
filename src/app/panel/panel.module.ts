import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


@NgModule({
  declarations: [PanelComponent, DashboardComponent, ProfileComponent, UsersComponent, UserDetailComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
