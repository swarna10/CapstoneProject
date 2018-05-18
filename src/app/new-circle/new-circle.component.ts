import { Component, OnInit } from '@angular/core';
import { CircleService } from '../circle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcircle',
  templateUrl: './new-circle.component.html',
  styleUrls: ['./new-circle.component.css']
})
export class NewCircleComponent implements OnInit {

  error: string;
  constructor(private circleservice: CircleService, private router: Router) { }

  ngOnInit() {
  }
  registerform(form: any) {
    console.log(form.value);
    this.circleservice.registercircle(form).subscribe(
      data => {
        if (data.status === 200) {
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        if (error.status != 201) {
          this.error = "Something Went Wrong!!! Please Refresh The Page...";
          console.log("Error Circle!");
        }
      }
    )

  }

}