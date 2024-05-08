import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-course-manage',
  templateUrl: './admin-course-manage.component.html',
  styleUrl: './admin-course-manage.component.css'
})
export class AdminCourseManageComponent {
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


// import { Component, Inject } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
// @Component({
//   selector: 'app-admin-course-manage',
//   templateUrl: './admin-course-manage.component.html',
//   styleUrls: ['./admin-course-manage.component.css']
// })
// export class AdminCourseManageComponent {
//   courses: any[] = []; // Initialize an empty array to store courses
//   newCourse: any = {}; // Initialize an empty object to store new course data

//   constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase) {}

//   onSubmit(form: NgForm) {
//     // Add the new course to the database
//     this.db.list('Courses').push({
//       courseCode: form.value.courseCode,
//       courseName: form.value.courseName,
//       instructorName: form.value.instructorName,
//       status: true // Initially set to true
//     }).then(() => {
//       console.log('Course added successfully');
//       form.reset(); // Reset the form after adding the course
//     }).catch((error: any) => {
//       console.error('Error adding course:', error);
//     });
//   }

//   fetchCourses() {
//     // Fetch courses from the database
//     this.db.list('Courses').valueChanges().subscribe((courses: any[]) => {
//       this.courses = courses; // Update the courses array with fetched data
//     });
//   }

//   editCourse(course: any) {
//     // Implement edit functionality
//   }

//   archiveCourse(course: any) {
//     // Toggle the status of the course
//     course.status = !course.status;

//     // Update the status in the database
//     this.db.object(`Courses/${course.$key}`).update({ status: course.status })
//       .then(() => {
//         console.log('Course archived successfully');
//       }).catch((error: any) => {
//         console.error('Error archiving course:', error);
//       });
//   }
// }
