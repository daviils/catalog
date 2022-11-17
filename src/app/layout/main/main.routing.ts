import {Route} from '@angular/router';
import {MainComponent} from "./main.component";

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('../../modules/catalog/catalog.module').then(m => m.CatalogModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('../../modules/typograph/typograph.module').then(m => m.TypographModule)
      },
    ]
  }
];
