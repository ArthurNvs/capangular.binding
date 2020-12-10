import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { item } from '../app.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  pedidoConcluido = false; 

  constructor() { }

  ngOnInit(): void {
    
  }
  
  fnConcluir(event: any): void{
    this.somaProdutos(event);
  
  }

  somaProdutos(itens: Array<item>): number {
    let somaProdutos = 0;

    itens.forEach(item => {
      somaProdutos += item.preco * item.quantidade;
    });

    return somaProdutos;
  }
}
