import { Injectable, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Order } from './order';
import { Room } from './room';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl= 'http://localhost:8084/users';
  private roomsUrl= 'http://localhost:8084/rooms';
  private ordersUrl= 'http://localhost:8084/orders';
  private sendname: string;
  private val: number;
  private seco: number;
  private thir: number;
  private four: number;

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  public saveUser(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  setUserName(name: string) {
    this.sendname=name;
  } 
  getUserName(): string {
    return this.sendname;
  }
  public getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.ordersUrl);
  }
  public saveOrder(order: Order) {
    return this.http.post<Order>(this.ordersUrl, order);
  }
  public deleteOrder(id: String) {
    return this.http.delete(`${this.ordersUrl}/${id}`, { responseType: 'text' });
  }
  public getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomsUrl);
  }
  public updateRoom(id: string, value: any) {
    return this.http.put(`${this.roomsUrl}/${id}`, value);
  }

  setACDouble(valu: any){this.val = valu;}
  getACDouble():any{return this.val;}
  setDouble(second: any){this.seco = second;}
  getDouble():any{return this.seco;}
  setACSingle(third: any){this.thir = third;}
  getACSingle():any{return this.thir;}
  setSingle(fourth: any){this.four = fourth;}
  getSingle():any{return this.four;}

  
  
}

