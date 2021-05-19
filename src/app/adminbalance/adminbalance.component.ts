import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Order } from '../order';

@Component({
  selector: 'app-adminbalance',
  templateUrl: './adminbalance.component.html',
  styleUrls: ['./adminbalance.component.css']
})
export class AdminbalanceComponent implements OnInit {
  balance=0;
  orders: Order[];
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getOrders().subscribe(data => {
      this.orders=data;
      for(let x of data){
        this.balance+= parseInt(x.price);
      }
    });
  }

}
