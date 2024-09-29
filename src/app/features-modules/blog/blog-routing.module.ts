import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', 
  component: BlogComponent,
  children: [
    { 
      
      path: 'machines', 
      loadChildren: () => import('./list/list.module').then(m => m.ListModule) 
    }, 
    { 
      path: 'bureau', 
      loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) 
    }, 
    { 
      path: 'management', 
      loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) 
    }
  ] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
