import { NgModule } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CpComponent } from './main/cp/cp.component';
import { MainComponent } from './main/main.component';
import { RecordsComponent } from './main/records/records.component';
import { VerificationComponent } from './main/verification/verification.component';

const routes: Routes = [
  {
    path: 'home',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'cp',
        pathMatch: 'full'
      },
      {
        path: 'cp',
        component: CpComponent
      },
      {
        path: 'verify',
        component: VerificationComponent
      },
      {
        path: 'records',
        component: RecordsComponent
      },
      {
        path: '**',
        redirectTo: '/login'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
