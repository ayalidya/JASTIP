import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { Tab3Page } from '../tab3/tab3';
import { Tab4Page } from '../tab4/tab4';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    items: Observable<any[]>;
  
    constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
      this.items = afDB.list('cuisines').valueChanges();
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad HomePage');
  }
  goTab1(){
    this.navCtrl.push(Tab1Page);
  }
  goTab2(){
    this.navCtrl.push(Tab2Page);
  }
  goTab3(){
    this.navCtrl.push(Tab3Page);
  }
  goTab4(){
    this.navCtrl.push(Tab4Page);
  }
  }

