import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }
    this.router.navigate(['./home']);
    this.success = true;
}

}
