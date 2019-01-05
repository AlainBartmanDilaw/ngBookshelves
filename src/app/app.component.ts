import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyC9fL_VPoaP0OTY4D9423YAiW-Dnn4pnoA",
      authDomain: "ngbookshelves.firebaseapp.com",
      databaseURL: "https://ngbookshelves.firebaseio.com",
      projectId: "ngbookshelves",
      storageBucket: "ngbookshelves.appspot.com",
      messagingSenderId: "104603464083"
    };
    firebase.initializeApp(config);

  }
}
