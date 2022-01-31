import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalErrorHandlerService } from 'src/app/global-error-handler.service';
import { RequestsService } from 'src/app/requests.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  form: FormGroup;
  public registrationInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private requests: RequestsService,
    private globalErrorHandler: GlobalErrorHandlerService,
    private router: Router,
  ) {
    this.registrationInvalid = false;
    this.formSubmitAttempt = false;
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.requests.registerUser(this.form.getRawValue()).subscribe(res => this.router.navigate(['/landing/login']), err => this.globalErrorHandler.dataUpdated.emit(err))
  }
}
