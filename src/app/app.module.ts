import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    LoginComponent,
    HomeComponent,
    HotelinfoComponent,
    RestaruntComponent,
    PeopleComponent,
    AdminComponent,
    OrderComponent,
    DetailsComponent,
    AdminviewComponent,
    AdminbalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
