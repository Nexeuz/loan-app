import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {AuthService} from '../../../../core/state/auth.service';
import {AuthQuery} from '../../../../core/state/auth.query';
import {Router} from '@angular/router';
import {FirebaseHandleErrorsService} from '../../../../core/services/firebase-handle-errors.service';

@Component({
  selector: 'zib-loan-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Nombre',
        placeholder: 'Escribe tu numbre completo',
        required: true,
      },
    },
    {
      key: 'dni',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Cédula',
        placeholder: 'Escribe tu número cédula',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Escribe tu email aquí',
        required: true,
        validators: {
          validation: ['email'],
        },
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
              private router: Router,
              private firebaseHandleErrors: FirebaseHandleErrorsService) {

  }


 async submit(): Promise<void> {
    try {
      await this.fireAuthService.signup(this.model.email, this.model.password);
      await this.fireAuthService.update({displayName: this.model.name, dni: this.model.dni, email: this.model.email});
      await this.router.navigate(['/login' ], {queryParams: {newUser: true}});
    } catch (e) {
      this.firebaseHandleErrors.handleMessageError(e);
    }

  }

  async goSignIn(): Promise<void> {
    await this.router.navigate(['/login']);
  }
}
