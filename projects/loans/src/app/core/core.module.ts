import { NgModule } from '@angular/core';
import {FormlyModule} from '@ngx-formly/core';
import {environment} from '../../environments/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';



@NgModule({
  imports: [
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Este campo es requerido' },
      ]
    }),
  ]
})
export class CoreModule { }
