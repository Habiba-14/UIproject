import { Component, ViewChild, inject } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion, addDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { IassignmentdbService } from '../iassignmentdb.service';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'app-add-new-assignment',
  templateUrl: './add-new-assignment.component.html',
  styleUrls: ['./add-new-assignment.component.css']
})
export class AddNewAssignmentComponent {


  @ViewChild ("createAssignment") assignmentForm : any;
  firestore:Firestore = inject(Firestore);

  savaData():void{

    const acollection = collection(this.firestore,'Courses');
    addDoc(acollection,
      {assignment_title : this.assignmentForm.value.assignment_title,
       description : this.assignmentForm.value.description,
       due_date : this.assignmentForm.value.due_date,
      })

  }

  resetForm():void{

    this.assignmentForm.reset({
      'assignment_title' : '',
      'description' :'',
      'due_date':''
    })
  }

  submitForm():void{

    this.savaData();
    this.resetForm();
   
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
