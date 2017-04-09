import { Component } from '@angular/core';
import { Session } from './models/session.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  session : Session = new Session('session test');

  getSession() : Session {
    return this.session;
  }

  event(data: string) {
    alert(`data : ${data}`);
  }
}
