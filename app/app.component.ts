import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from './UserService';
import { GoogleApiService } from 'ng-gapi';
import { SheetResource } from './SheetResource';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public sheetId: string;
  public sheet: any;
  public foundSheet: any;

  constructor(private userService: UserService,
              private sheetResource: SheetResource,
              private route: ActivatedRoute,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
     // First make sure gapi is loaded can be in AppInitilizer
     this.gapiService.onLoad().subscribe();

  }

  ngOnInit() {
        this.route.fragment.subscribe((fragment) => {
        console.log(fragment)
    })
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }
}
