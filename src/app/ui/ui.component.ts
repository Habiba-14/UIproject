// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ui',
//   templateUrl: './ui.component.html',
//   styleUrl: './ui.component.css'
// })
// export class UiComponent {

// }
// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-ui',
//   templateUrl: './ui.component.html',
//   styleUrl: './ui.component.css'
// })
// export class UiComponent {
//   // @Input() title: string = '';
//   // @Input() content: string = '';
//   // isOpened = false;

//   // toggleContent() {
//   //   this.isOpened = !this.isOpened;
//   // }
// }

// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Component({
//   selector: 'app-ui',
//  templateUrl: './ui.component.html',
//   styleUrl: './ui.component.css'
// })
// export class UiComponent implements OnInit {
//   coursesCollection!: AngularFirestoreCollection<any>;
//   courses$!: Observable<any[]>;

//   constructor(private firestore: AngularFirestore) { }

//   ngOnInit(): void {
//     // Get reference to the Courses collection
//     this.coursesCollection = this.firestore.collection('Courses');

//     // Fetch all documents from the Courses collection
//     this.courses$ = this.coursesCollection.snapshotChanges().pipe(
//       map(actions => {
//         return actions.map(a => {
//           const data = a.payload.doc.data();
//           // const code = a.payload.doc.code;
//           // const assesments = a.payload.doc.assesments;
//           // const instructors = a.payload.doc.instructors;
//           return { data};
//         });
//       })
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class CourseDetailsComponent implements OnInit {
    // Inject AngularFirestore
    constructor(private firestore: AngularFirestore) { }

    ngOnInit(): void {
        // Call a method to fetch data based on instructor name and course code
        this.getCourseDetails('salma', '404');
    }

    getCourseDetails(instructor: string, courseCode: string): void {
        // Fetch data from Firestore based on instructor name and course code
        this.firestore.collection('Courses', ref => ref.where('instructors', 'array-contains', instructor)
            .where('courseCode', '==', courseCode))
            .valueChanges().subscribe((data: any) => {
                console.log('Course Details:', data);
                // You can assign data to a variable and use it in your component template
            });
    }
}

