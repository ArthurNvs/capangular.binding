import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  @Output('enviar') submitEvent = new EventEmitter<any>();

  pedidoConcluido = false;  

  constructor() { }

  ngOnInit(): void {
  }
  
  fnConcluir(): void{
   this.submitEvent.emit();
   console.log("carrinho");
  }

}
