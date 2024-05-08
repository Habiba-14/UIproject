// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  nationalID: number=12;
  mobileNumber: number=12;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string='';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.firstName, this.lastName, this.nationalID, this.mobileNumber, this.email, this.password, this.role);
  }
}
