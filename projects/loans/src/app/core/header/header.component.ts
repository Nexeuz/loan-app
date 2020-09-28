import { Component, OnInit } from '@angular/core';
import {AuthService} from '../state/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'zib-loan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authState: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async signOut(): Promise<void> {
    await this.authState.signOut();
    await this.router.navigateByUrl('/login');
  }
}
