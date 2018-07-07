import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { Provider } from './provider/provider';
import { LoginService } from './login/login.component.service';
import { SignupService } from './signup/signup.component.service'

import { ListingService } from './services/listing-schedule-service/listing.component.service'
import { BookingService } from './services/booking-service/booking.component.service'
import { CheckinService } from './services/checkin-service/checkin.component.service'
import { AuthGuardService } from './guards/login-guard.service';
import { AuthService } from './services/auth/auth-service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HistoryComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    RouterModule,
    SharedModule
  ],
  providers: [Provider,SignupService,LoginService,ListingService,BookingService,CheckinService,
    AuthGuardService,AuthService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
