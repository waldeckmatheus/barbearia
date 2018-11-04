import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [UsuarioFormComponent, UsuarioListComponent],
  imports: [
    CommonModule, UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
