import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import{IStudent} from '../../Interfaces/istudent'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() stuInfo!:IStudent[];
  @Output() clickStudent:EventEmitter<any>=new EventEmitter();
  studentClicked:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  getClass(e:boolean){
    if(e){
      return 'even';
    }else{
      return 'odd';
    }
  }
  deleteData(deleteUser:any){
    this.stuInfo.splice(deleteUser,1);

  }
  getUser(index:number){
    this.studentClicked.push(this.stuInfo[index]); 
    this.clickStudent.emit(this.studentClicked)
  }
}
