import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
