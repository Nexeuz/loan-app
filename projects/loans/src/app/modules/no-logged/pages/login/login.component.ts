import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {AuthService} from '../../../../core/state/auth/auth.service';
import {AuthQuery} from '../../../../core/state/auth/auth.query';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FirebaseHandleErrorsService} from '../../../../core/services/firebase-handle-errors.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'zib-loan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Escribe tu email aquí',
        required: true,
      },
      validators: {
        validation: ['email'],
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Escribe tu actual contraseña',
        required: true,
      },
    },
  ];

  constructor(private fireAuthService: AuthService,
              public authQuery: AuthQuery,
              private http: HttpClient,
              private snackbar: MatSnackBar,
              private firebaseHandleErrorsService: FirebaseHandleErrorsService,
              private router: Router,
              private activated: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.showAlertNewUser();
  }


  showAlertNewUser(): void {
    this.activated.queryParams
      .subscribe(it => {
        if (it.newUser) {
          this.snackbar.open('Usuario creado correctamente, inicia sesión con tus credenciales', 'Ok', {
            duration: 5000,
          });
        }
      });
  }


  async submit(): Promise<void> {
    try {
      await this.fireAuthService.signin(this.model.email, this.model.password);
      await this.router.navigateByUrl('/dashboard');
    } catch (e) {
      this.firebaseHandleErrorsService.handleMessageError(e);
    }
  }

  async goRegister(): Promise<void> {
    await this.router.navigate(['/register']);
  }
}
