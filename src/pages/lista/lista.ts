import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
//importa a página addList
import {AddListPage} from '../add-list/add-list'

//Acrescentar essa linha para importar o AngularFireDatabase
import { AngularFireDatabase } from 'angularfire2/database';

//importar o Observable
import { Observable } from 'rxjs/Observable';

//importar a interface item
import {item} from '../../models/item/item.interface'

//importar a página editItem
import { EditItemPage } from '../edit-item/edit-item'

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {



  // vamos criar uma variavel do tipo Observable 
  listaItemRef$:Observable<any[]>
 
teste
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase, 
    private actionSheetCtrl:ActionSheetController ) {
    this.listaItemRef$ = this.database.list('list').snapshotChanges().map(arr => {
      return arr.map(snap => Object.assign(snap.payload.val(), { $key: snap.key }) )
 });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }


  //função para redirecionar para a página addList
  goAddList(){
    this.navCtrl.push(AddListPage);
  }


  //função para selecionar um item
  selectItem(listItem: item){
    
    this.actionSheetCtrl.create({

      title: `${listItem.itemName}`,
      buttons: [

                  {
                    text:'Editar',
                    handler: () =>{
                      //Vamos redirecionar para a página editItem, passando a key como um parâmetro!
                        this.navCtrl.push(EditItemPage, {itemid:listItem.$key})
                    }
                    
                  },
                  {
                    text:'Excluir',
                    role:'destructive',
                    handler: () => {
                      //aqui chamamos a função remove para remover a key especificada.
                      this.database.list('list').remove(listItem.$key)
                     
                   
                     
                     
                    }

                  },
                  {
                    text:'Cancelar',
                    role:'cancel',
                    handler: () =>{
                      console.log('Operação Cancelada');
                    }
                  }
              ]



    }).present();

  }

}
