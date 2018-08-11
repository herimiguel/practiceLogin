import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { UserService } from './user.service'
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path: '', children: [], pathMatch: 'full', component: LoginComponent},
  {path: 'home', children: [], pathMatch: 'full', component: HomeComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


