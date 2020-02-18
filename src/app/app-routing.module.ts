import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { PayrollComponent } from './components/finanze/payroll/payroll.component';


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
