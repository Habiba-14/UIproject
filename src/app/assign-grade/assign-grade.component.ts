import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-assign-grade',
  templateUrl: './assign-grade.component.html',
  styleUrls: ['./assign-grade.component.css']
})
export class AssignGradeComponent {
  constructor(private firestore: AngularFirestore) {}

  addGrade(studentName: string, topic: string, gradeInput: string): void {
    // Parse the grade input as a number
    const grade = parseFloat(gradeInput);

    if (isNaN(grade)) {
      console.error('Invalid grade input. Please enter a valid numeric grade.');
      return;
    }

    const gradesCollection = this.firestore.collection('grades');

    gradesCollection.add({
      studentName,
      topic,
      grade
    })
    .then(() => {
      console.log('Grade added successfully!');
      // Additional actions (e.g., show success message) can be performed here
    })
    .catch(error => {
      console.error('Error adding grade:', error);
    });
  }
}