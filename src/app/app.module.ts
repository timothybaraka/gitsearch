import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoDisplayComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    // GitsearchFormComponent,
    RepoDisplayComponent,
    UserComponent,
    SearchComponent,
    RepoSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
