import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddNewAssignmentComponent } from './add-new-assignment/add-new-assignment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCourseManageComponent } from './admin-course-manage/admin-course-manage.component';
import { AssignGradeComponent } from './assign-grade/assign-grade.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GradesComponent } from './grades/grades.component';
import { IassignmentComponent } from './iassignment/iassignment.component';
import { IhomepageComponent } from './ihomepage/ihomepage.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'Register',
    component: RegisterComponent
  },
  {
    path:'courses',
    component: CoursesComponent
  },
  {
    path:'AddAssignments',
    component: AddNewAssignmentComponent
  },  
  {
    path:'Admin',
    component: AdminComponent
  },
  {
    path:'AdminCourse',
    component: AdminCourseManageComponent
  },
  {
    path:'AddStudentGrades',
    component: AssignGradeComponent
  },
  {
    path:'assignment',
    component: AssignmentComponent
  },
  {
    path:'grades',
    component: GradesComponent
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'Iassignment',
    component: IassignmentComponent
  },
  {
    path:'Ihome',
    component: IhomepageComponent
  },
  {
    path:'studentgrades',
    component: StudentGradesComponent
  },
  {
    path:'studentsprogress',
    component: StudentProgressComponent
  },
  {
    path:'ui',
    component: UiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
