import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {//implements OnInit 
  title = 'eGIRO';
  user?: User | null;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }
  get isAdmin() {
    return this.user?.role === Role.Admin;
}

logout() {
    this.authenticationService.logout();
}
//  ngOnInit(): void {
//    this.router.events.subscribe((evt) => {
//      if (!(evt instanceof NavigationEnd)) {
//        return;
//      }
//    });
//  }
}
