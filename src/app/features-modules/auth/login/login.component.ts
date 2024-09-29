// login.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public password: boolean[] = [true];
  public routes = routes;
  public Toggledata = true;
  public CustomControler: unknown;
  public subscription: Subscription;

  form: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.subscription = this.appService.loginStatus$.subscribe((data) => {
      if (data !== '0') {
        this.CustomControler = data;
        // Gérez ici la redirection ou d'autres actions après la connexion
      }
    });
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    localStorage.removeItem('LoginData');
  }

  submit() {
    const { email, password } = this.form.value;
    this.appService.login(email, password).subscribe(
      (response) => {
        console.log(response);
        // Si la connexion réussit, vous pouvez ajouter une logique ici pour rediriger l'utilisateur vers la page appropriée.
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }

  public togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }
}
