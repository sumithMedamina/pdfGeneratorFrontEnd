import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'insurdetail', component: InsuranceDetailsComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
