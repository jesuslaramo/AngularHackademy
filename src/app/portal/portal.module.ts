import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsComponent } from './components/us/us.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    PortalComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
