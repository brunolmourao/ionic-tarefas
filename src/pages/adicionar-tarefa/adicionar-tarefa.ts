import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TarefasProvider } from '../../providers/tarefas/tarefas';
import { Tarefas } from '../../models/tarefas'
import {HomePage} from '../../pages/home/home'
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the AdicionarTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-tarefa',
  templateUrl: 'adicionar-tarefa.html',
})
export class AdicionarTarefaPage {
  public tarefa = {} as Tarefas;
  constructor(public navCtrl: NavController, public navParams: NavParams,private tarefasProvider: TarefasProvider) {
  }
  // Método que será usado para adicionar uma tarefa
  adicionarTarefa(tarefa: Tarefas) {
    tarefa.finalizada = false;
    this.tarefasProvider.adicionar(tarefa);
    this.navCtrl.setRoot(TabsPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTarefaPage');
  }

}
