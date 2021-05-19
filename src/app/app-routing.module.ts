import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HotelinfoComponent } from './hotelinfo/hotelinfo.component';
import { RestaruntComponent } from './restarunt/restarunt.component';
import { PeopleComponent } from './people/people.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminbalanceComponent } from './adminbalance/adminbalance.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'info', component: HotelinfoComponent},
  { path: 'food', component: RestaruntComponent},
  { path: 'people', component: PeopleComponent} ,
  { path: 'admin', component: AdminComponent},
  { path: 'orders', component: OrderComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'booking', component: AdminviewComponent},
  { path: 'balance', component: AdminbalanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
