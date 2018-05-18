import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import {User} from './user';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[];
 @Output() selectedUser=new EventEmitter<any>();
 
  constructor(private userService : UsersService) { }

  selectUser(UserData:string){
  const currentUserValue={
  type:'user',
  value:UserData
   }
   this.selectedUser.emit(currentUserValue);
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => {this.users=data.json();});
  }

  ngOnInit() {
  this.getUsers();
  }
  myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

}
