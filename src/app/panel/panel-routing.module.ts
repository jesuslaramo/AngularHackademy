import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'users', component: UsersComponent},
      { path: 'user/detail/:id', component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
