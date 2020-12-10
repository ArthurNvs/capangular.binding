import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() nome: string = '';
  @Input() endereco: string = '';
  @Input() entregar: boolean = false;


  cliente: ICliente = {};

  constructor() { }

  ngOnInit(): void {
    this.cliente.nome = "";
    this.cliente.endereco = "";
    this.cliente.entregar = false;
  }

}

export interface ICliente {
  nome?: string,
  endereco?: string,
  entregar?: boolean,
}