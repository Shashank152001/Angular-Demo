import { Component } from '@angular/core';
import{IStudent} from '../app/Interfaces/istudent'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  Counter!:number;
  stuList!:IStudent[];

  getChildUsers:any = [];
  stuData:IStudent[] = [
    {
      id: 1,
      fname: 'Kunal',
      lname: 'Gupta',
      age: 22,
      stream: 'frontend'
    },
    {
      id: 2,
      fname: 'Sohan',
      lname: 'Gupta',
      age: 23,
      stream: 'Backend'
    },
    {
      id: 3,
      fname: 'Ravi',
      lname: 'Gupta',
      age: 24,
      stream: 'frontend'
    },
    {
      id: 4,
      fname: 'Harsh',
      lname: 'Sharma',
      age: 25,
      stream: 'frontend'
    },
    {
      id: 5,
      fname: 'Shashnak',
      lname: 'Varshney',
      age: 26,
      stream: 'frontend'
    },
  ]
  sendData(){
    this.stuList = this.stuData;
  }
  eventHandler(item:any){
    console.log(item);
    this.getChildUsers.push(item);
  }
  countHandle(count:number){
    this.Counter=count;
  }

}
