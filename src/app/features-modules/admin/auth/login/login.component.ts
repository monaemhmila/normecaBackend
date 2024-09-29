import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';
interface CustomControlerType {
  status: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnDestroy{
  public Toggledata = true;
   
  public CustomControler: CustomControlerType | undefined;
  public subscription: Subscription;
  form = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
  });
  get f() {
    return this.form.controls;
  }

  constructor(private appService: AppService ,private router: Router // Add this line
  ) {
    this.subscription = this.appService.loginStatus$.subscribe((data) => {
      if (data !== '0') {
       // this.CustomControler = data;
        // Gérez ici la redirection ou d'autres actions après la connexion
      }
    });
   
  }
 

  submit() {
    const { email, password } = this.form.value;
    this.appService.login(email, password).subscribe(
      (response) => {
        console.log(response);
        if (response && response.success){
         
          this.router.navigate(['/admin/dashboard']);
        } else {
          console.error('Login failed. Display an error message or take appropriate action.');
        }
      },
      (error) => {
        console.error('An error occurred during login. Display an error message or take appropriate action.');
      }
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }
}
