import { Component } from '@angular/core';
import { User } from './my-class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  this_user;
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
    this.this_user=this.users[this.users.length-1]
  }
}
