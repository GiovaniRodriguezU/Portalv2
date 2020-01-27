import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';
import { Communication } from 'src/app/shared/models/communication.model';
import { firestore, User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private communicationDoc: AngularFirestoreCollection<Communication>;
  communication$: Observable<any>;
  user  ;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.communicationDoc = this.afs.collection<Communication>('communications');
    this.communication$ = this.communicationDoc.valueChanges();
  }

  addView(key: string, viewsCount: number) {
    this.user = this.afAuth.auth.currentUser;
    this.afs.doc<any>(`communications/${key}`).update({
      views: firestore.FieldValue.arrayUnion(this.user.uid), viewsCount: viewsCount + 1
    });
  }
}
