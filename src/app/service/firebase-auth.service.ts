import { Injectable, ɵsetCurrentInjector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  user: any;
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.user;
  }
  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success!', value);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value);
        console.log(value.user.email);
        this.user = value.user;
        console.log('Nice, it worked!');
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    console.log(this.firebaseAuth.currentUser)
    this.firebaseAuth.signOut().then((value) => {
      console.log('Nice, it worked!');
    })
    .catch((err) => {
      console.log('Something went wrong:', err.message);
    });;
  }
}
