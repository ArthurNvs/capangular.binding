import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICliente } from '../model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  entregar: boolean = false;

  cliente: ICliente = { nome: "" };

  constructor() { }

  ngOnInit(): void {

  }
  
  onSubmit(form: NgForm) {
    console.log(form);
  }

  saveUser(nome: string, endereco: string, entregar: boolean) {
    this.cliente =  {
      nome: nome,
      endereco: endereco,
      entregar: entregar
    }

    console.log('inside saveUser()');
    console.log(this.cliente);

    return this.cliente;
  }

}