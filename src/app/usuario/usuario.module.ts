import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PageHeaderModule } from '../shared';

@NgModule({
  declarations: [UsuarioFormComponent, UsuarioListComponent],
  imports: [
    CommonModule, UsuarioRoutingModule, PageHeaderModule
  ]
})
export class UsuarioModule { }
