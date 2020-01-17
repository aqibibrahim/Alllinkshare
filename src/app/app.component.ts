import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "My Transaction",
        url   : "/mytanscation",
        icon  : "chatboxes"
      },
      {
        title : "Coupon",
        url   : "/coupon",
        icon  : "contacts"
      },
      {
        title : "Favorities",
        url   : "/favorities",
        icon  : "contacts"
      },
      {
        title : "Advertise",
        url   : "/advertise",
        icon  : "contacts"
      },
      {
        title : "Free Listing",
        url   : "/free-listing",
        icon  : "contacts"
      },
      {
        title : "Feedback",
        url   : "/feedback",
        icon  : "contacts"
      },
      {
        title : "Help & Support",
        url   : "/help",
        icon  : "contacts"
      },
    ]
  }
}
