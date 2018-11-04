import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  declarations: [ClienteFormComponent, ClienteListComponent],
  imports: [
    CommonModule, ClienteRoutingModule
  ]
})
export class ClienteModule { }
