import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../service/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: FirebaseAuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  get formControls() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.email, this.form.value.password);

    this.authService.login(this.form.value.email, this.form.value.password);
  }

}
