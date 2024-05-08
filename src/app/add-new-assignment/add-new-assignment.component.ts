import { Component, ViewChild, inject } from '@angular/core';
import { Firestore, arrayUnion, doc, updateDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-assignment',
  templateUrl: './add-new-assignment.component.html',
  styleUrls: ['./add-new-assignment.component.css']
})
export class AddNewAssignmentComponent {

  @ViewChild('createAssignment') assignmentForm!: NgForm;
  firestore: Firestore = inject(Firestore);
  saveData(): void {
    const courseDocRef = doc(this.firestore, 'Courses', 'OOP');
    updateDoc(courseDocRef, {
      assessments: arrayUnion({
        title: this.assignmentForm.value.assignmentTitle,
        description: this.assignmentForm.value.assignmentDescription,
        dueDate: this.assignmentForm.value.dueDate
      })
    });
  }

  resetForm(): void {
    this.assignmentForm.reset();
  }

  submitForm(): void {
    if (this.assignmentForm.valid) {
      this.saveData();
      this.resetForm();
    }
  }

//   const assignmentId = 'some-unique-id';
//   const updatedData = {
//   title: 'Updated Assignment Title',
//   description: 'Updated assignment description',
//   // Other updated fields...
//   };

//   this.assignmentService.updateAssignment(assignmentId, updatedData)
//   .then(() => {
//     console.log('Assignment updated successfully!');
// })
//   .catch(
//     (error) => { console.error('Error updating assignment:', error);});

  // @ViewChild('createAssignment') assignmentForm!: NgForm;
  // firestore: Firestore = inject(Firestore);

  // saveData(): void {
  //   console.log('saveData called');
  //   const courseDocRef = doc(this.firestore, 'Courses', 'OOP');
  //   const newAssignment = {
  //     name: this.assignmentForm.value.assignment_title,
  //     description: this.assignmentForm.value.description,
  //     duedate: this.assignmentForm.value.due_date
  //   };

  //   console.log('Updating Firestore document...');
  //   updateDoc(courseDocRef, {
  //     assesments: arrayUnion(newAssignment)
  //   })
  //  .then(() => {
  //     console.log('Assignment added successfully!');
  //   })
  //  .catch((error) => {
  //     console.error('Error adding assignment:', error);
  //   });
  // }

  // resetForm(): void {
  //   this.assignmentForm.reset();
  // }

  // submitForm(): void {
  //   console.log('submitForm called');
  //   this.saveData();
  //   this.resetForm();
  // }

}
