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
          // User is not null, proceed with your logic
          console.log('User logged in:', userCredential.user.email);
          // Redirect to the homepage or any other route
          this.router.navigate(['/homepage']);
        } else {
          // User is null, handle the case appropriately
          console.error('No user associated with these credentials');
        }
      })
      .catch((error) => {
        // Handle authentication error
        console.error('Authentication error:', error.message);
      });
  }
  
}
