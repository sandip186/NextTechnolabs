import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { HiringComponent } from './hiring/hiring.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "About-Us", component: AboutUsComponent},
  {path: "Services", component: ServicesComponent},
  {path: "Hiring", component: HiringComponent},  
  {path: "ContactUs", component: ContactUsComponent  }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

