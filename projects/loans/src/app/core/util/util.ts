import {FormControl, ValidationErrors} from '@angular/forms';
import {MatFormFieldDefaultOptions} from '@angular/material/form-field';
import {CurrencyPipe} from '@angular/common';

export function emailValidator(control: FormControl): ValidationErrors {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(control.value) ? null : {email: true};
}

export const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};


export function minValidationMessage(err, field): string {
  return `El valor debe ser mayor que ${ new CurrencyPipe('en').transform(field.templateOptions.min, 'COP', '$', '0.0-0') }`;
}

export function maxValidationMessage(err, field): string {
  return `El valor no debe ser mayor de ${ new CurrencyPipe('en').transform(field.templateOptions.max, 'COP', '$', '0.0-0')}`;
}
