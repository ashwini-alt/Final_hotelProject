import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User = new User();

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
  }

  
  save() {
    this.userService.saveUser(this.user)
      .subscribe(data => this.gotoUserList(), error => console.log(error));
      this.user = new User();
  }
  onSubmit() {
    this.save();
  }

  gotoUserList() {
    this.router.navigate(['/login']);
  }
}
