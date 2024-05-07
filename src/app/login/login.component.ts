import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string ='';
  password: string='';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  onLogin(): void {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        if (userCredential.user) {
          console.log('User logged in:', userCredential.user.email);
          this.router.navigate(['/homepage']);
        } else {
          console.error('No user associated with these credentials');
        }
      })
      .catch((error) => {
        console.error('Authentication error:', error.message);
      });
  }
  
}
