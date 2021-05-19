import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { User } from '../user';
import { Order } from '../order';
import {Room} from '../room';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  order: Order = new Order();
  rooms = ["AC Double Bed Room","AC Single Bed Room","Double Bed Room","Single Bed Room"];
  roomname=" ";
  check = ["Yes","No"];
  food=" ";
  payed:string;
  msg:string;
  ra=[];//=10;rb=10;rc=10;rd=10;
  arr=[];
  public location='';
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService)
  {}
  myFunc() {
    this.userService.getRooms().subscribe(values => {
      for(let y of values){
        this.ra.push(y.avaliable);
        //this.ra.pop();
      }
    })
    console.log(this.arr.length);
  }
  

  save() {
    this.userService.saveOrder(this.order)
      .subscribe(data => this.router.navigate(['/details']), error => console.log(error));
      this.roomUpdation();
      this.order = new Order();
  }
  OnSubmit() {
    let len= this.userService.getOrders.length+1;
    console.log(len);
    console.log(this.userService.getUserName());
    this.order.username = this.userService.getUserName();
    var sum=0,foodcost=0;
    if(this.order.food ==="Yes"){
      foodcost+=300;
    }
    console.log(foodcost);
    if(this.order.roomname===this.rooms[0]){
      sum=sum+(foodcost* +this.order.ppl)+(6000 * +this.order.days);
      this.order.oid = "R0"+len;

    } if(this.order.roomname===this.rooms[1]){
      sum=sum+(foodcost* +this.order.ppl)+(3000 * +this.order.days);
      this.order.oid = "R1"+len;
      
    } if(this.order.roomname===this.rooms[2]){
      sum=sum+(foodcost* +this.order.ppl)+(2000 * +this.order.days);
      this.order.oid = "R2"+len;
      
    } if (this.order.roomname===this.rooms[3]) {
      this.order.oid = "R3"+len;
      sum=sum+(foodcost* +this.order.ppl)+(800 * +this.order.days);
      
    }
    this.order.price=''+sum;
    this.payed = this.checkpay();
    if(this.payed==="1"){
      this.save();
    } else {
      this.msg="Please Pay to continue..."
    }
    
  }


  checkpay():string{
    let confirmation = prompt("Total Amount Payable : Rs."+this.order.price+"\nType 1 to pay"," ");
    return confirmation;
  }

  roomUpdation(){
    this.userService.getRooms().subscribe(sdata=> {
      for(let x of sdata){
        this.arr.push( x.avaliable);
        var status=0;
        if(x.name ===this.order.roomname && x.name===this.rooms[0]){
          status=status+ +x.avaliable - +this.order.num;
          this.userService.setACDouble(status);
          this.userService.updateRoom("R1",this.userService.getACDouble()).subscribe();
          break;
        } else if(x.name===this.order.roomname && x.name===this.rooms[1]){
          status=status+ +x.avaliable - +this.order.num;
          this.userService.setACSingle(status);
          this.userService.updateRoom("R2",this.userService.getACSingle()).subscribe();
          break;
        } else if(x.name===this.order.roomname && x.name===this.rooms[2]){
          status=status+ +x.avaliable - +this.order.num;
          this.userService.setDouble(status);
          this.userService.updateRoom("R3",this.userService.getDouble()).subscribe();
          break;
        }else if(x.name ===this.order.roomname && x.name===this.rooms[3]){
          status=status+ +x.avaliable - +this.order.num;
          this.userService.setSingle(status);
          this.userService.updateRoom("R4",this.userService.getSingle()).subscribe();
          break;
        }
      }
    });
    
  }


  
}
