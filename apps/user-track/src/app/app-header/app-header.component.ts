import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'harelmono-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {

  user!: User
  user$: Observable<User> | undefined

  constructor(
    private userService: UserService) {}

 ngOnInit(): void {
   this.user$ = this.userService.user$
    }

logout(): void {
  this.userService.logout()
}
}
