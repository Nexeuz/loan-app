import {NgModule} from '@angular/core';
import {FormlyModule} from '@ngx-formly/core';
import {environment} from '../../environments/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {appearance, emailValidator, maxValidationMessage, minValidationMessage} from './util/util';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    HttpClientModule,
    AkitaNgRouterStoreModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatSnackBarModule,
    AngularFirestoreModule.enablePersistence(),
    FormlyModule.forRoot(
      {
        validators: [
          {name: 'email', validation: emailValidator},
        ],
        validationMessages: [
          {name: 'email', message: 'Este campo no es un email válido'},
          {name: 'required', message: 'Este campo es requerido'},
          { name: 'min', message: minValidationMessage },
          { name: 'max', message: maxValidationMessage },
        ]
      }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class CoreModule {
}
