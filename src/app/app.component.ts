import { Component, OnInit,  ChangeDetectionStrategy,  ViewEncapsulation } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';

import { MatPasswordStrengthComponent } from "@angular-material-extensions/password-strength";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  email: string;
  password: string;
  
  title = 'ang-route-block';
  faTimes = faTimes;
  faFacebookSquare = faFacebookSquare;
  faApple = faApple;
  
  constructor(public afAuth: AngularFireAuth) { }
  ngOnInit() {
    this.afAuth.authState.subscribe((user) => console.log(user));
  }

  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  signInFb() {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.signInWithPopup(facebookAuthProvider);
  }

  signInEmail() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
  }

 

  signOut() {
    this.afAuth.signOut();
  }
}