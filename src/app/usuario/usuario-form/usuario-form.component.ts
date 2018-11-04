import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  animations: [routerTransition()]
})
export class UsuarioFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
