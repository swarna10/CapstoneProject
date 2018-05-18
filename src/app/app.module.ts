import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { CircleComponent } from './circle/circle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './user.service';
import { MessageService } from './message.service';
import { CircleService } from './circle.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCircleComponent } from './new-circle/new-circle.component';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        MessageComponent,
        CircleComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        NewCircleComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule, FormsModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'dashboard', component: (localStorage.getItem('token') === null) ? LoginComponent : DashboardComponent },
            {path: 'createCircle',component: NewCircleComponent}
            /*(localStorage.getItem('token') === null) ? LoginComponent : DashboardComponent}*/
        ])
    ],
    providers: [UsersService, CircleService, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
