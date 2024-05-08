// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   styleUrl: './courses.component.css'
// })
// export class CoursesComponent {

// }

// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.css']
// })
// export class CoursesComponent implements OnInit {
//   courses$: Observable<any[]>;

//   constructor(private firestore: AngularFirestore) { }

//   ngOnInit(): void {
//     this.courses$ = this.firestore.collection('Courses').valueChanges();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesCollection!: AngularFirestoreCollection<any>;
  courses$!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // Get reference to the Courses collection
    this.coursesCollection = this.firestore.collection('Courses');

    // Fetch all documents from the Courses collection
    this.courses$ = this.coursesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          // const code = a.payload.doc.code;
          // const assesments = a.payload.doc.assesments;
          // const instructors = a.payload.doc.instructors;
          return { data};
        });
      })
    );
  }
}
