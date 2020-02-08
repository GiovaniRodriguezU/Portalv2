import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<User>

  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  async signIn(email: string, password:string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    let uid = this.afAuth.auth.currentUser.uid
    console.log(uid)
    return this.router.navigate['/communication']
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    return this.router.navigate['/']
  }
}
