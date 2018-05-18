import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) {}

  register(form: NgForm) {
    console.log(form.value);
    this.userService.register(form).subscribe(
      data => {
        if (data.status === 201) {
          alert('Registeration Successfull');
          this.router.navigate(['']);
          } else {
             alert('Failed to Register. Try a different Username');
         }
      }
      );
  }


  ngOnInit() {
      }
}
