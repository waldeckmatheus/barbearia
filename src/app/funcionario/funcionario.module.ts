import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';

@NgModule({
  declarations: [FuncionarioFormComponent, FuncionarioListComponent],
  imports: [
    CommonModule, FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
