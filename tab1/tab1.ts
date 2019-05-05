import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
    menuName : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.menuName = navParams.get('name');
  }
  order(){
    this.navCtrl.push(OrderPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
