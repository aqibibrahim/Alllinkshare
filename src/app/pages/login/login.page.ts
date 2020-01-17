import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cgt: boolean = true;
  cn: boolean = true;
  email :any;
  number :any;
  usertype:any;
  password:any;

  constructor(private route: Router,private authService: AuthService,private alertService: AlertService,private navCtrl: NavController) { }

  ngOnInit() {
  }
  // radio_select(value) {
  //   if (value == 'buyer') {
  //     this.email = false;
  //     this.number = true;
  //   } else if (value == 'seller') {
  //     this.email = true;
  //     this.number = false;
  //   }
  // }
  login() {
    this.usertype = "seller";
    this.number = '';
    this.authService.login(this.email,this.password,this.usertype,this.number).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        
        this.route.navigate(['/dashboard']);
      }
    );
  }
}
