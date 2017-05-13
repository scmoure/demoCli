import { Component, OnInit } from '@angular/core';
import { Session } from './models/session.model';
import { UserService } from './services/user.service';
import { UserDto } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app works!';
  session : Session = new Session('session test');

  constructor (private userService: UserService) {};

  ngOnInit() {
  }

  getSession() : Session {
    return this.session;
  }

  event(data: string) {
    alert(`data : ${data}`);
  }
}
