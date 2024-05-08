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

import { AdminComponent } from './admin/admin.component';
import { AdminCourseManageComponent } from './admin-course-manage/admin-course-manage.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { RegisterComponent } from './register/register.component';
import { IassignmentComponent } from './iassignment/iassignment.component';
import { IhomepageComponent } from './ihomepage/ihomepage.component';
import { firestore } from 'firebase-admin';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';


const firebase = {
  apiKey: "AIzaSyAS1u9Bk0tMUUYAgJOYPCDAiAp-TAuEK7U",
  authDomain: "uiproject-955ff.firebaseapp.com",
  databaseURL: "https://uiproject-955ff-default-rtdb.firebaseio.com",
  projectId: "uiproject-955ff",
  storageBucket: "uiproject-955ff.appspot.com",
  messagingSenderId: "262293220099",
  appId: "1:262293220099:web:3e7a4727693501e2ab1736",
  measurementId: "G-GCVQKP50T1"
  };


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
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAS1u9Bk0tMUUYAgJOYPCDAiAp-TAuEK7U",
      authDomain: "uiproject-955ff.firebaseapp.com",
      databaseURL: "https://uiproject-955ff-default-rtdb.firebaseio.com",
      projectId: "uiproject-955ff",
      storageBucket: "uiproject-955ff.appspot.com",
      messagingSenderId: "262293220099",
      appId: "1:262293220099:web:3e7a4727693501e2ab1736",
      measurementId: "G-GCVQKP50T1"})),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    AngularFireModule,
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
