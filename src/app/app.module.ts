import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment';
import { AddNewAssignmentComponent } from './add-new-assignment/add-new-assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignGradeComponent } from './assign-grade/assign-grade.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CoursesComponent } from './courses/courses.component';
import { GradesComponent } from './grades/grades.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { UiComponent } from './ui/ui.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCourseManageComponent } from './admin-course-manage/admin-course-manage.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { RegisterComponent } from './register/register.component';
import { IassignmentComponent } from './iassignment/iassignment.component';
import { IhomepageComponent } from './ihomepage/ihomepage.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    CoursesComponent,
    GradesComponent,
    AssignmentComponent,
    StudentGradesComponent,
    AddNewAssignmentComponent,
    AssignGradeComponent,
    UiComponent,
    AdminComponent,
    AdminCourseManageComponent,
    StudentProgressComponent,
    RegisterComponent,
    IassignmentComponent,
    IhomepageComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
