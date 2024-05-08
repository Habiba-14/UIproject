import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-iassignment',
  templateUrl: './iassignment.component.html',
  styleUrl: './iassignment.component.css'
})
export class IassignmentComponent {
    constructor(private firestore: AngularFirestore) { }
    addContent( description: string, contentType: string) {
      // Assuming you have a 'courses' collection in your Firestore database
      this.firestore.collection('Courses').add({
        description: description,
        contentType: contentType
      }).then(() => {
        console.log('Content added successfully!');
      }).catch(error => {
        console.error('Error adding content: ', error);
      });
    }
  }



