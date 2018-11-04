import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListComponent } from './servico-list/servico-list.component';
import { ServicoRoutingModule } from './servico-routing.module';

@NgModule({
  declarations: [ServicoFormComponent, ServicoListComponent],
  imports: [
    CommonModule, ServicoRoutingModule
  ]
})
export class ServicoModule { }
