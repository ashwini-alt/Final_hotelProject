import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'frontend';
  msg = "If you are already an user, Please Login!";
  users: User[];

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
  }

  onSubmit(values){
    this.userService.getUsers().subscribe(data => {
        if(values.name == "Admin") {
          for(let x of data){
            if(x.name === values.name && x.password === values.password) {
              console.log(values.name);
              this.userService.setUserName(values.name);
              this.gotoAdminPage();
            }
            else {
              this.msg = "Please login again with correct credentials";
            }
          }
        }
        else {
          for(let x of data){
            if(x.name === values.name && x.password === values.password) {
              this.userService.setUserName(values.name);
              console.log(values.name);
              this.msg = "Hi "+ values.name + "! \n Login Successful";
              this.gotoUserList();
            }
            else {
              this.msg = "Please login again with correct credentials";
            }
          }
        }
    });
  }
  gotoAdminPage(){
    this.router.navigate(['/admin']);
  }
  gotoUserList() {
    this.router.navigate(['/people']);
  }
}