import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// vamos importar nossa interface
import {item} from '../../models/item/item.interface'

//Acrescentar essa linha para importar o AngularFireDatabaseModule
import { AngularFireDatabase } from 'angularfire2/database';

//importar o Observable
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add-list',
  templateUrl: 'add-list.html',
})
export class AddListPage {

//vamos criar um objeto usando a interface que acabamos de criar
  listaItem = {} as item;

// vamos criar uma variavel do tipo Observable 
listaItemRef$:Observable<any[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
  
    this.listaItemRef$ = this.database.list('list').valueChanges();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListPage');
  }

  // Essa função recebe como parâmetro o item digitado pelo usuário
  addItem(listaItem: item){
    
    //O push faz o insert dos dados no firebase.

    this.database.list('list').push({
      itemName: this.listaItem.itemName,
      itemNumber: this.listaItem.itemNumber
    });

    // Vamos resetar nosso objeto
    this.listaItem = {} as item;

    // Vamos após o usuário clicar em 'Adicionar' voltar para a página anterior
    this.navCtrl.pop();

  }
}
