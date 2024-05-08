// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrl: './admin.component.css'
// })
// export class AdminComponent {
//   taskArray = [{taskDescription:'habiba', taskDueDate:new Date(), isCompleted: false , isEditable: false }];
//   onSubmit(form:NgForm){
//     console.log(form);
//     this.taskArray.push({
//       taskDescription:form.controls['description'].value,
//       taskDueDate:form.controls['date'].value,
//       isCompleted: false,
//       isEditable: false
//     })

//     form.reset();
//   }

//   onDelete(index: number) {
//     console.log(index);
//     this.taskArray.splice(index, 1);
//   }

//   onCheck(index: number) {
//     console.log(this.taskArray);
//     this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
//   }

//   onEdit(index:number)
//   {
//     this.taskArray[index].isEditable = true;
//   }

//   onSave(index: number, newdescription:string, newdate:string) 
//   {
//     this.taskArray[index].taskDescription=newdescription;
//     this.taskArray[index].taskDueDate=new Date(newdate);
//     this.taskArray[index].isEditable = false;
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  deactivated: boolean;
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  civilIdNumber: string;
  email: string;
  role: string;
  password: string;
  approved: boolean;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>('/api/users').subscribe(users => {
      this.users = users;
    });
  }

  approveUser(user: User) {
    // Send a request to your backend to update the user's approval status
    // For example:
    this.http.put(`/api/users/${user.id}`, { approved: true }).subscribe(() => {
      user.approved = true;
    });
  }

  deleteUser(user: User) {
    // Send a request to your backend to delete the user
    // For example:
    this.http.delete(`/api/users/${user.id}`).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
    });
  }

  deactivateUser(user: User) {
    // Implement similar logic to approveUser and deleteUser to deactivate the user
  this.http.put(`/api/users/${user.id}`, { deactivated: true }).subscribe(() => {
      user.deactivated = true;
    });
  }
}
