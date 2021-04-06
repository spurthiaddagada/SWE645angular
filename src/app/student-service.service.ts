import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


export class Student{
  constructor(
    public stdid:string,
    public stdname:string,
    public stdlastname:string,
    public stdadd:string,
    public stdcity:string,
    public stdstate:string,
    public stdzip:string,
    public stddate:string,
    public stdtel:string,
    public stdemail:string,
    public stdurl:string,
    public stdmonth:string,
    public stdyear:string,
    public stdcheckbox:string,
    public stdradio:string,
    public stdlike:string,
    public stddata:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  // serviceURL: string;
  // liveInterviewWindow: any;
  // private root: string;

  private usersUrl: string;
  private studentList:Array<String>=[];
  private std:Array<Student>=[];
  private stdDetail:Student;



  constructor( private http:HttpClient) {
  }


  getStdDetail(stdid){
    return this.http.get<Student>('http://35.193.176.36:32305/SWE645-HW3/students'+'/'+stdid)
  }

  getStudents()
  {
    return this.http.get<Student[]>('http://35.193.176.36:32305/SWE645-HW3/students');
  }

  setStudent(student){
    console.log(student);
    const url ='http://35.193.176.36:32305/SWE645-HW3/students'
     return this.http.post<any>(url, student).pipe(map((data:any)=>data));
  }

}
