import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user-model';

@Component({
  selector: 'harelmono-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  user!: User

  constructor(
    private userService: UserService,
    private router: Router,) {}

    ngOnInit(): void {
      this.user = this.userService.getEmptyUser()
    }
  
    onLogin() {
      console.log('user:', this.user)
        this.userService.login(this.user)
        this.router.navigateByUrl('/')
    }
}
