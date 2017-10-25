import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
   
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
