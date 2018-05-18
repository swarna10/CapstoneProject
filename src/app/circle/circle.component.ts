import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Circle} from './circle';
import {CircleService} from '../circle.service'

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  circles : Circle[];
@Output() selectedCircle=new EventEmitter<any>();

  constructor(private circleService:CircleService) { }
  selectCircle(circleData:string){
    let currentCircleValue={
    type:'circle',
    value:circleData
     }
     this.selectedCircle.emit(currentCircleValue);
    }
  getCircles(){
    this.circleService.getCircles().subscribe(data =>(this.circles=data.json()));
  }
  ngOnInit() {
  this.getCircles();
  }

}
