import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface FirebaseErrors {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseHandleErrorsService {

  constructor(private snackBar: MatSnackBar) {

  }

  handleMessageError(errorCode: FirebaseErrors): void {
    switch (errorCode.code) {
      case 'auth/email-already-in-use':
        this.showSnackbar('Este Email se encuentra ya registrado');
        break;
      case 'auth/user-not-found':
        this.showSnackbar('Correo electrónico no registrado');
        break;
      case 'auth/weak-password':
        this.showSnackbar('La contraseña debe tener al menos 6 carácteres');
    }
  }

  showSnackbar(text: string): void {
    this.snackBar.open(text, 'Ok', {
        duration: 5000
      }
    );
  }
}
