import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  assignmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore // Inject Firestore service
  ) {
    this.assignmentForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: ['', Validators.required],
      dropdown: ['', Validators.required]
    });
  }

  onSubmit() {
    // Get form values
    const assignmentTitle = this.assignmentForm.get('title')!.value;
    const assignmentFile = this.assignmentForm.get('file')!.value;

    // Save data to Firestore (replace 'assignments' with your collection name)
    this.firestore.collection('assignments').add({
      title: assignmentTitle,
      file: assignmentFile,
    })
    .then(() => {
      console.log('Assignment submitted successfully!');
      // You can perform additional actions (e.g., show success message)
    })
    .catch(error => {
      console.error('Error submitting assignment:', error);
    });
  }
}
