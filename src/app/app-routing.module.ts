import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { ProfileComponent } from './modules/home/pages/profile/profile.component';
import { CommunicationsComponent } from './modules/home/components/communications/communications.component';
import { PayrollComponent } from './modules/home/components/finanze/payroll/payroll.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'communication', component: CommunicationsComponent },
  { path: 'payroll', component: PayrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
