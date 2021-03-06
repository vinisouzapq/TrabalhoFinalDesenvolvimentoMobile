import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
        path: '',
        redirectTo: 'Inbox',
        pathMatch: 'full'
  },
  {
        path: 'Inbox',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
        path: 'linhas',
        loadChildren: () => import('./linhas/linhas.module').then( m => m.LinhasPageModule)
  },
  {
        path: 'veiculos/:id',
        loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosPageModule)
  },
  {
        path: 'equipe',
        loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipePageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
