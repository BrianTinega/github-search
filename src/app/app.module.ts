import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { FormGithubSearchComponent } from './form-github-search/form-github-search.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    FormGithubSearchComponent,
    GithubSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
