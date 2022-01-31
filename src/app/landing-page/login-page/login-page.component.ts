import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalErrorHandlerService } from 'src/app/global-error-handler.service';
import { RequestsService } from 'src/app/requests.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private request: RequestsService,
    private globalErrorHandler: GlobalErrorHandlerService,
    private router: Router,
  ) {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  async onSubmit() {
    this.request.loginUser(this.form.getRawValue()).subscribe(res => this.router.navigate(['/dashboard']), err => this.globalErrorHandler.dataUpdated.emit(err))
  }

}
