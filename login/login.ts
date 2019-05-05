import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
@ViewChild('user') user;
@ViewChild('pass') userpass;
username:string;
password:string;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public alertCtrl: AlertController) {
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async login(){

    this.afAuth.auth.signInWithEmailAndPassword(this.user.value + '@domain.xta', this.userpass.value).then(data=>{
      console.log('ionViewDidLoad LoginPage');
      this.navCtrl.setRoot(TabsPage);
    })
    
    .catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })

    
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
 }