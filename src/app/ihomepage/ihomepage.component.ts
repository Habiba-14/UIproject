// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ihomepage',
//   templateUrl: './ihomepage.component.html',
//   styleUrl: './ihomepage.component.css'
// })
// export class IhomepageComponent {

// }
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-ihomepage',
   templateUrl: './ihomepage.component.html',
  styleUrl: './ihomepage.component.css'
})
export class IhomepageComponent  {

  constructor(private firestore: AngularFirestore) { }

  addContent(week: string, description: string, contentType: string) {
    // Assuming you have a 'courses' collection in your Firestore database
    this.firestore.collection('Courses').add({
      week: week,
      description: description,
      contentType: contentType
    }).then(() => {
      console.log('Content added successfully!');
    }).catch(error => {
      console.error('Error adding content: ', error);
    });
  }
}
