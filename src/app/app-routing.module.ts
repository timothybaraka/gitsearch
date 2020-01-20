import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/user/user.component';
import { RepoDisplayComponent } from '../app/repo-display/repo-display.component'

const routes: Routes = [
    {path: 'users',component: UserComponent},
    {path: 'repositories',component: RepoDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
