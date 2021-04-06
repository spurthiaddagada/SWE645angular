import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService, Student } from '../student-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.css']
})
export class StdListComponent implements OnInit {

  students:string[];
  student='';
  

  constructor(private http:HttpClient,private myService:StudentServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.myService.getStudents().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
  {
      this.students=response;
  }

}
