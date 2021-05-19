import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  orders: Order[];
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getOrders().subscribe(data => {
      this.orders=data;
    });
  }

}
