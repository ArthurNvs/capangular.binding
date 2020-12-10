import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  { path:'', redirectTo: '/cliente', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
