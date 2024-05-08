import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {

  assignmentForm: FormGroup;
  options = [
    { value: 'option1', viewValue: 'Option 1' },
    { value: 'option2', viewValue: 'Option 2' },
    { value: 'option3', viewValue: 'Option 3' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.assignmentForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: ['', Validators.required],
      dropdown: ['', Validators.required]
    });
  }

  onSubmit() {
   
  }

}
