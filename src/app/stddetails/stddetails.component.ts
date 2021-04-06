import { Component, OnInit } from '@angular/core';
import { StudentServiceService, Student } from '../student-service.service';
import { StudentComponent } from '../student/student.component';
import { StdListComponent } from '../std-list/std-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stddetails',
  templateUrl: './stddetails.component.html',
  styleUrls: ['./stddetails.component.css']
})
export class StddetailsComponent implements OnInit {

  stdDet:Student;
  stdid:any;
  studentDetails:any;
  constructor(private myService:StudentServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.stdid = this.route.snapshot.paramMap.get('id');
    console.log("id selected is "+this.stdid);
    this.myService.getStdDetail(this.stdid).subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
    console.log(this.stdDet);
  }

  handleSuccessfulResponse(response)
  {
      this.studentDetails=response;
      console.log("student details from database using id retrieving is "+this.studentDetails);
  }

}

