import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CpComponent } from './main/cp/cp.component';
import { RecordsComponent } from './main/records/records.component';
import { VerificationComponent } from './main/verification/verification.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ListComponent } from './main/cp/list/list.component';
import { ControlComponent } from './main/cp/control/control.component';
import { NewcontrolComponent } from './main/cp/newcontrol/newcontrol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsService } from './main/cp/controls.service';
import { RecordsService } from './main/records/records.service';
import { TableComponent } from './main/records/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CpComponent,
    RecordsComponent,
    VerificationComponent,
    ListComponent,
    ControlComponent,
    NewcontrolComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ControlsService,RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
