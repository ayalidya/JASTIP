import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs'
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { ProfilePage } from '../pages/profile/profile';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { Tab4Page } from '../pages/tab4/tab4';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBWe8mndhCUFr-MQBzINSr_dUC-jtm4V3A",
  authDomain: "jas-tip.firebaseapp.com",
  databaseURL: "https://jas-tip.firebaseio.com",
  projectId: "jas-tip",
  storageBucket: "jas-tip.appspot.com",
  messagingSenderId: "750341635770",
  appId: "1:750341635770:web:1b747ac8a2caf615"
};



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    TabsPage,
    HomePage,
    OrderPage,
    ProfilePage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    UpdateprofilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    TabsPage,
    HomePage,
    OrderPage,
    ProfilePage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    UpdateprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
