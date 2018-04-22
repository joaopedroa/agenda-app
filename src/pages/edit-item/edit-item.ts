import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Acrescentar essa linha para importar o AngularFireDatabase
import { AngularFireDatabase } from 'angularfire2/database';

//importar o Observable
import { Observable } from 'rxjs/Observable';

//importar a interface item
import {item} from '../../models/item/item.interface'

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  // vamos criar uma variavel do tipo Observable 
  listaItemRef$:Observable<any[]>
  
  //vamos criar um novo objeto
  item = {} as item;
  itemId;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
    
    //aqui vamos criar uma variável para pegar a váriavel que foi passada como parâmetro
    this.itemId = this.navParams.get('itemid')

  
  }
  //Aqui temos uma função para editar o item. Ela recebe como parâmetro o item que o usuario digitou.
  editItem(item:item){
    this.database.list(`list`).update(this.itemId,{
      itemName: item.itemName,
      itemNumber: item.itemNumber});
      this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
  }

}
