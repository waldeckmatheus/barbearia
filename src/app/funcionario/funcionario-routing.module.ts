import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';

const routes: Routes = [
    {
        path: '',
        component: FuncionarioListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule {}
