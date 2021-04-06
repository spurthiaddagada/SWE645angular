import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService, Student } from '../student-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:string[];
 student='';
 numeric:number=0;
 mean:number=0;
 sum : number=0;
 sd:number=0;
 value:String;
 data:String[];
 id:String;
 name:String;
 studentDetails:Student;
 scheduleForm: FormGroup;
 stdArray:Array<String>=[];
 showSimpleAcknowledgement:boolean = false;
 showWinnerAcknowledgement:boolean = false;





 showSuccess = true;

  constructor(private http:HttpClient,private myService:StudentServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.scheduleForm = this.fb.group({
      sid: ['', Validators.required],
      sname:['',Validators.required],
      lname:['',Validators.required],
      sdata:['', {updateOn: "blur"}],
      saddress:['',Validators.required],
      szip:['',Validators.required],
      scity:['',Validators.required],
      sstate:['',Validators.required],
      semail:['',Validators.required],
      stel:['',Validators.required],
      sdate:['',Validators.required],
      surl:['',Validators.required],
      sgradmonth:[],
      sgradyear:[],
      scheck1:[''],
      scheck2:[''],
      scheck3:[''],
      scheck4:[''],
      scheck5:[''],
      scheck6:[''],
 radioBtn:[],
 likeliness:[],
 comments:[]
    });

    console.log("get students"+this.myService.getStudents());

    //this.myService.getStudents().subscribe(
      //response =>this.handleSuccessfulResponse(response),
     //);
  }

  handleSuccessfulResponse(response)
  {
      //this.students=response;
      console.log("student ids retrieving "+this.students);
  }
  changeCheckboxValue($event, ctrlName){
    var scheckCtrl = this.scheduleForm.get(ctrlName);
    $event.target.checked ? scheckCtrl.patchValue($event.target.value) : scheckCtrl.patchValue('')
  }

  countChar() {
    var d = this.scheduleForm.get('sdata').value.split(','); // convert text into array of numbers
    // elements of array are still strings, must convert to numbers

    if (d.length < 10) {
        alert('Data should be atleast 10 numbers');
    }

}

computeCheckboxValue(){
  var scheck1 = this.scheduleForm.get("scheck1").value;
  var scheck2 = this.scheduleForm.get("scheck2").value;
  var scheck3 = this.scheduleForm.get("scheck3").value;
  var scheck4 = this.scheduleForm.get("scheck4").value;
  var scheck5 = this.scheduleForm.get("scheck5").value;
  var scheck6 = this.scheduleForm.get("scheck6").value;

  return scheck1 + scheck2  + scheck3 + scheck4 + scheck5 + scheck6
}

  submit():void{

    if(!this.scheduleForm.get('sid').value ||
    !this.scheduleForm.get('sname').value ||
    !this.scheduleForm.get('lname').value ||
    !this.scheduleForm.get('saddress').value ||
    !this.scheduleForm.get('scity').value ||
    !this.scheduleForm.get('szip').value ||
    !this.scheduleForm.get('sstate').value ||
    !this.scheduleForm.get('stel').value ||
    !this.scheduleForm.get('semail').value ||
    !this.scheduleForm.get('sdate').value ){
      alert('All the required fields must be entered');
    }

    else{
  this.showSuccess = false;
  this.value = this.scheduleForm.get("sdata").value;
  this.data = this.value.split(",")
  for(let i=0;i<this.data.length;i++){
    this.numeric= this.numeric + (+this.data[i]);

  }

  



  this.showSuccess = true;
  this.showSimpleAcknowledgement = true;


 console.log("radio"+this.scheduleForm.get("radioBtn").value);
 console.log("likeliness"+this.scheduleForm.get("likeliness").value)

   this.studentDetails = {
     stdid : this.scheduleForm.get("sid").value,
     stdname : this.scheduleForm.get("sname").value,
     stdlastname : this.scheduleForm.get("lname").value,
    stdadd:this.scheduleForm.get("saddress").value,
    stdcity:this.scheduleForm.get("scity").value,
    stdstate:this.scheduleForm.get("sstate").value,
    stdzip:this.scheduleForm.get("szip").value,
    stdtel:this.scheduleForm.get("stel").value,
    stdemail:this.scheduleForm.get("semail").value,
    stddate:this.scheduleForm.get("sdate").value,
    stdurl:this.scheduleForm.get("surl").value,
    stdmonth:this.scheduleForm.get("sgradmonth").value,
    stdyear:this.scheduleForm.get("sgradyear").value,
    stdcheckbox:this.computeCheckboxValue(),
    stdradio:this.scheduleForm.get("radioBtn").value,
    stdlike:this.scheduleForm.get("likeliness").value,
    stddata:this.scheduleForm.get("sdata").value
   }
  console.log(this.studentDetails);
  this.myService.setStudent(this.studentDetails);
  this.myService.setStudent(this.studentDetails).subscribe(studentList=>{
    this.students=studentList;
    response => alert("student added successfully");
  });


  }
    }



  onSubmit(): void {
  };


}
