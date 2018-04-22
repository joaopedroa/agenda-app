import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Acrescentar essa linha para importar o AngularFireModule
import { AngularFireModule } from 'angularfire2';

//Acrescentar essa linha para importar o AngularFireDatabaseModule
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Importar página Lista que acabamos de criar
import {ListaPage} from '../pages/lista/lista'

//importar página addLista que acabamos de criar
import {AddListPage} from '../pages/add-list/add-list'

//importar página edit-item que acabamos de criar
import {EditItemPage} from '../pages/edit-item/edit-item'

const config  = {
  apiKey: "AIzaSyA8t-DcS_M94QHEKg1sYg_WK1VM60N2k3M",
  authDomain: "agenda-app-11150.firebaseapp.com",
  databaseURL: "https://agenda-app-11150.firebaseio.com",
  projectId: "agenda-app-11150",
  storageBucket: "agenda-app-11150.appspot.com",
  messagingSenderId: "293707652670"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaPage,
    AddListPage,
    EditItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Iniciar o app com os dados de conexão do firebase
    AngularFireModule.initializeApp(config),
    //importar AngularFireDatabaseModule
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaPage,
    AddListPage,
    EditItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
