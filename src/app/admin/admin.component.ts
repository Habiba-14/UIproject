import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  taskArray = [{taskDescription:'habiba', taskDueDate:new Date(), isCompleted: false , isEditable: false }];
  onSubmit(form:NgForm){
    console.log(form);
    this.taskArray.push({
      taskDescription:form.controls['description'].value,
      taskDueDate:form.controls['date'].value,
      isCompleted: false,
      isEditable: false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index:number)
  {
    this.taskArray[index].isEditable = true;
  }

  onSave(index: number, newdescription:string, newdate:string) 
  {
    this.taskArray[index].taskDescription=newdescription;
    this.taskArray[index].taskDueDate=new Date(newdate);
    this.taskArray[index].isEditable = false;
  }

}

