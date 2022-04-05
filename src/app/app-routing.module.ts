import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './myComponents/email/email.component';
import { HomeComponent } from './myComponents/home/home.component';

const routes: Routes = [
  {
    path: "sendEmail",
    component: EmailComponent,
    pathMatch: "full"
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
