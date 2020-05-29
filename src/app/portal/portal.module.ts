import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsComponent } from './components/us/us.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './extras/carousel/carousel.component';
import { CarouselItemComponent } from './extras/carousel-item/carousel-item.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    PortalComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsComponent,
    CarouselComponent,
    CarouselItemComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
