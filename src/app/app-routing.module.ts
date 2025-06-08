import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { Modulo1Component } from './components/modulo1/modulo1.component';
import { Modulo2Component } from './components/modulo2/modulo2.component';
import { Modulo3Component } from './components/modulo3/modulo3.component';
import { Modulo4Component } from './components/modulo4/modulo4.component';
import { CreditosComponent } from './components/creditos/creditos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'modulo1', component: Modulo1Component },
  { path: 'modulo2', component: Modulo2Component },
  { path: 'modulo3', component: Modulo3Component },
  { path: 'modulo4', component: Modulo4Component },
  { path: 'creditos', component: CreditosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
