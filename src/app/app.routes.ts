import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(comp => comp.HomeComponent),
    title: 'Playground - Home',
  },
  {
    path: 'table/checkbox',
    loadComponent: () => import('./pages/table-check/table-check.component').then(c => c.TableCheckComponent),
    title: 'Playground - Table with Checkbox',
  },
  {
    path: 'table/pagination',
    loadComponent: () =>
      import('./pages/table-pagination/table-pagination.component').then(c => c.TablePaginationComponent),
    title: 'Playground - Table with Pagination',
  },
  {
    path: 'table/split-row',
    loadComponent: () =>
      import('./pages/split-row-table/split-row-table.component').then(c => c.SplitRowTableComponent),
    title: 'Playground - Table with Split Row',
  },
  {
    path: 'table/multi-row',
    loadComponent: () => import('./pages/multirow-table/multirow-table.component').then(c => c.MultirowTableComponent),
    title: 'Playground - Table with Multi Row',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
