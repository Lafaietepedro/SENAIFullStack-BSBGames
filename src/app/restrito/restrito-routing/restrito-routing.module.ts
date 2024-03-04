import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from '../../restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from '../../restrito/lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from '../../restrito/atualiza-produto/atualiza-produto.component';
import { RestritoComponent } from '../../restrito/restrito.component';

const restritoRoutes: Routes = [
  {
    path: 'restrito', component: RestritoComponent, children: [
      {path: 'cadastro', component: CadastroProdutoComponent},
      {path: 'lista', component: ListaProdutoComponent},
      {path: 'editar/:id', component: AtualizaProdutoComponent}
    ]
  },

  {path: '', redirectTo: '/restrito/lista', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(restritoRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }