import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {AuthService} from '../../../../core/state/auth/auth.service';
import {AuthQuery} from '../../../../core/state/auth/auth.query';
import {Router} from '@angular/router';
import {FirebaseHandleErrorsService} from '../../../../core/services/firebase-handle-errors.service';
import {AuthStore} from '../../../../core/state/auth/auth.store';

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
        attributes: {
          autocomplete: 'username'
        },
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
        attributes: {
          autocomplete: 'current-password'
        },
        label: 'Contraseña',
        placeholder: 'Escribe tu actual contraseña',
        required: true,
      },
    },
  ];

  constructor(private fireAuthService: AuthService,
              public authQuery: AuthQuery,
              private router: Router,
              private authStore: AuthStore,
              private firebaseHandleErrors: FirebaseHandleErrorsService) {

  }


  async submit(): Promise<void> {
    try {
      this.authStore.setLoading(true);
      await this.fireAuthService.signup(this.model.email, this.model.password);
      await this.fireAuthService.update(
        state => (
        {
          ...state,
          displayName: this.model.name,
          creditPayment: null,
          userStatus: 'Nuevo',
          dni: this.model.dni,
          email: this.model.email
        })
      );
      this.authStore.setLoading(false);
      await this.router.navigate(['/login'], {queryParams: {newUser: true}});
    } catch (e) {
      this.authStore.setLoading(false);
      this.firebaseHandleErrors.handleMessageError(e);
    }

  }

  async goSignIn(): Promise<void> {
    await this.router.navigate(['/login']);
  }
}
