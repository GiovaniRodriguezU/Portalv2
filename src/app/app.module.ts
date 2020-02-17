import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase modules

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';



// Material components //
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// ANgular CDK
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { environment } from 'src/environments/environment';
import { ProfileComponent } from './modules/home/pages/profile/profile.component';
import { CommunicationsComponent } from './modules/home/components/communications/communications.component';
import { CommunicationListComponent } from './modules/home/components/communications/communication-list/communication-list.component';
import { CommunicationItemComponent } from './modules/home/components/communications/communicationList/communication-item/communication-item.component';
import { CreateCommunicationComponent } from './modules/home/components/communications/create-communication/create-communication.component';
import { PayrollComponent } from './modules/home/components/finanze/payroll/payroll.component';
import { TicketsComponent } from './modules/home/components/finanze/tickets/tickets.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    CommunicationsComponent,
    CommunicationListComponent,
    CommunicationItemComponent,
    CreateCommunicationComponent,
    PayrollComponent,
    TicketsComponent

  ],
  entryComponents: [CreateCommunicationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    // Material design
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,

    // Angular CDK
    ScrollingModule
  ],
  providers: [AngularFireAuthGuard, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
