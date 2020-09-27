import {Injectable, NgZone} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../../state/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoLoggedGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private zone: NgZone) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.sync()
      .pipe(
        map(it => {
          if (it) {
            this.zone.run(() => {
                this.router.navigateByUrl('/dashboard');
            });
          } else {
            return true;
          }
        })
      );
  }

}
