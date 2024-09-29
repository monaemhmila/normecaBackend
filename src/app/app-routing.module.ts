// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './features-modules/admin/projects/projects.component';
import { ProjectsDetailsComponent } from './features-modules/freelancer/project/projects-details/projects-details.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./features-modules/features-modules.module').then( (m) => m.FeaturesModulesModule) 
  },
 
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project-details',
  component: ProjectsDetailsComponent,
    data: {
      article: {} // Provide your article data here when navigating to project-details
    }
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
