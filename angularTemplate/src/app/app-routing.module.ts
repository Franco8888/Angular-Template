import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

// insert Routes here
const routes: Routes = [
  //creating home route==
  {path: '', redirectTo:'home', pathMatch: 'full'},    //Here we set our default path to home
  {path: 'home', component:HomeComponent},  //create home path
  //=====================
  {path: 'contact', component:ContactComponent} //create contact path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
