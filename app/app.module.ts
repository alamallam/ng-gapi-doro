import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
    GoogleApiModule, 
    GoogleApiService, 
    GoogleAuthService, 
    NgGapiClientConfig, 
    NG_GAPI_CONFIG,
    GoogleApiConfig
} from "ng-gapi";
import { AppComponent } from './app.component';
import { UserService } from './UserService';
import { SheetResource } from './SheetResource';
import {RouterModule} from '@angular/router';

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "372063809670-fvbs4n6op7eamkincjvd265b159aaq1c.apps.googleusercontent.com",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    ux_mode: "redirect",
    redirect_uri: "https://ng-gapi-example.stackblitz.io/redirect",
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" ")
};

@NgModule({
  imports:      [ 
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'redirect',
      component: AppComponent
    }]),
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, SheetResource]
})
export class AppModule {

 }
