// import { Component } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   email: string ='';
//   password: string='';

//   constructor(private afAuth: AngularFireAuth, private router: Router) {}

//   onLogin(): void {
//     this.afAuth
//       .signInWithEmailAndPassword(this.email, this.password)
//       .then((userCredential) => {
//         if (userCredential.user) {
//           console.log('User logged in:', userCredential.user.email);
//           this.router.navigate(['/homepage']);
//         } else {
//           console.error('No user associated with these credentials');
//         }
//       })
//       .catch((error) => {
//         console.error('Authentication error:', error.message);
//       });
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log('Login method called in in login ts');
    if(this.email == '') {
      alert('Please enter email');
      return;
    }
    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';

  }
 
}