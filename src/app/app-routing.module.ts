import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubSearchComponent} from './github-search/github-search.component'
import {AboutComponent} from './about/about.component'
import {Repository} from './repository'


const routes: Routes = [
  { path: 'github-search', component: GithubSearchComponent},
  { path: 'about', component: AboutComponent},
  { path:  '' ,component:GithubSearchComponent},
  { path: 'repository', component:Repository}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
