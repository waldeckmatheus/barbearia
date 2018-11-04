import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
  animations: [routerTransition()]
})
export class UsuarioListComponent implements OnInit {
  usuarioList = [
    {login:'usuario01',nome:'Usuário 01', telefone:'987654321'},
    {login:'usuario02',nome:'Usuário 02', telefone:'997654321'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
