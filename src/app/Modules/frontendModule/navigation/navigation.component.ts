import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private LoginService: AuthenticationService
  ) {}
  isLoggedIn: boolean = true;
  ngOnInit(): void {}
  onLogout() {
    this.LoginService.logout();
    this.router.navigate(['/']);
    location.reload();
  }
}
