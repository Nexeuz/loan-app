import {FormControl, ValidationErrors} from '@angular/forms';
import {MatFormFieldDefaultOptions} from '@angular/material/form-field';

export function emailValidator(control: FormControl): ValidationErrors {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(control.value) ? null : {email: true};
}

export const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
