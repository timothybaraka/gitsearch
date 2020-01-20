import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { RepoDisplayComponent } from './repo-display/repo-display.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchFormComponent,
    RepoDisplayComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
