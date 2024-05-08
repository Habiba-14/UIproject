// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  // login method
  login(email : string, password : string) {
    console.log('Login method called in authentication');
    this.fireAuth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
        
        const domain = email.split('@')[1];
      // Redirect based on domain
        switch (domain) {
        case 'student.com':
          this.router.navigate(['/home']);
          break;
        case 'instructor.com':
          this.router.navigate(['/Ihome']);
          break;
        case 'admin.com':
          this.router.navigate(['/admin']);
          break;
        default:
          // Redirect to a default page if domain is not recognized
          this.router.navigate(['/login']);
          break;
      }
        // if(res.user?.emailVerified == true) {
        //   this.router.navigate(['dashboard']);
        // } else {
        //   this.router.navigate(['/varify-email']);
        // }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  
    register(firstName: string, lastName: string, nationalID: number, mobileNumber: number, email: string, password: string, role: string) {
      return this.fireAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Add user data to Firestore Users collection
          this.firestore.collection('Users').doc(userCredential.user?.uid).set({
            firstName: firstName,
            lastName: lastName,
            nationalID: nationalID,
            mobileNumber: mobileNumber,
            email: email,
            role: role,
          });
          // Redirect user after successful registration
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          console.error('Error registering user:', error);
          // Handle error
        });
    }
  }

