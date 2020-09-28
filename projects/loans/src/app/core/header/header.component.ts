import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../state/auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'zib-loan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  constructor(private authState: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter( it => it instanceof NavigationEnd),
        tap(it => this.sidenav.close())
      ).subscribe();
  }

  async signOut(): Promise<void> {
    await this.authState.signOut();
    await this.router.navigateByUrl('/login');
  }
}
