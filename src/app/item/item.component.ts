import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { item } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output('itens') submit = new EventEmitter<Array<item>>();

  public itens: Array<item> = new Array<item>();
  public listItens: Array<item> = new Array<item>();

  constructor() { }

  ngOnInit(): void {    

    let produtos = [
      {
        id: 1,
        categoria: "Hardware",
        descricao: "Teclado Gamer",
        preco: 300.00,
        quantidade: 0
      },
      {
        id: 2,
        categoria: "Hardware",
        descricao: "Mouse Sem Fio",
        preco: 100.00,
        quantidade: 0
      },
      {
        id: 3,
        categoria: "Software",
        descricao: "Super Defender",
        preco: 200.00,
        quantidade: 0
      },
      {
        id: 4,
        categoria: "Hardware",
        descricao: "Lenovo max",
        preco: 2200.00,
        quantidade: 0
      },
      {
        id: 5,
        categoria: "Hardware",
        descricao: "Predator H900",
        preco: 5900.00,
        quantidade: 0
      }
    ];

    for (let produto of produtos) {
      this.itens.push(produto);
    }

    this.submit.emit(this.itens);
  } 

}

export interface IItem {
  descricao: string,
  categoria: string,
  preco: number,
  id: number,
  quantidade: number,
}
