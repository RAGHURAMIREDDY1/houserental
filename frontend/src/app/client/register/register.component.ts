import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}
  onRegistrationCreate(registration: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
  }) {
    console.log(registration);

    this.http
      .post('http://localhost:5100/api/user/register', registration)
      .subscribe((res) => {
        alert('Registered Successfully');
        this.router.navigate(['/login']);
      });
  }
}
