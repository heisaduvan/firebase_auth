import { Component } from '@angular/core';
import { FirebaseAuthService } from './service/firebase-auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-withme';
  constructor(private authService : FirebaseAuthService) {
  }
  logOut(){
    this.authService.logout();
  }
}
