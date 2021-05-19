import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Order } from '../order';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  objs=[];
  order: Order[];
  del="";
  rooms = ["AC Double Bed Room","AC Single Bed Room","Double Bed Room","Single Bed Room"];
  remainroom=[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getOrders().subscribe(data => {
      for(let x of data){
        let listofobj={};
        console.log(x.username+this.userService.getUserName());
        if(x.username===this.userService.getUserName()){
          Object.assign(listofobj,{"oid":x.oid},{"curdate":x.curdate},{"roomname":x.roomname},{"days":x.days},{"startdate":x.startdate},{"num":x.num},{"ppl":x.ppl},{"food":x.food},{"username":x.username},{"price":x.price});
          this.objs.push(listofobj);
        }
      }
      this.order = data;
    });
  }
  roomDelete(){
    this.userService.getRooms().subscribe(values => {
      for(let y of values){
        this.remainroom.push(y.avaliable);
        //this.ra.pop();
      }
    })
    var deleteStatus = prompt("Are you sure you want to delete the Booking? \nEnter the RoomId once again","");
    this.userService.getOrders().subscribe(data => {
      for(var ord of data){
        if(deleteStatus === ord.oid){
          this.userService.deleteOrder(deleteStatus).subscribe(data => {
              console.log(data);
              this.del="Your Room Booking is Canceled! Do check and book the rooms once again. Thank you!";
              var checkremain=0;
              if(ord.roomname===this.rooms[0]){
                checkremain+= +this.remainroom[0] + +ord.num;
                this.userService.updateRoom("R1",checkremain).subscribe();
              }
              else if(ord.roomname===this.rooms[1]){
                checkremain+= +this.remainroom[1] + +ord.num;
                this.userService.updateRoom("R2",checkremain).subscribe();
              }
              else if(ord.roomname===this.rooms[2]){
                checkremain+= +this.remainroom[2] + +ord.num;
                this.userService.updateRoom("R3",checkremain).subscribe();
              } 
              else if(ord.roomname===this.rooms[3]){
                checkremain+= +this.remainroom[3] + +ord.num;
                this.userService.updateRoom("R4",checkremain).subscribe();
              }
            },
            error => console.log(error));
          } 
          break; 
        }
        this.del="Please Enter Correct Room Id";
      });
    }
}
