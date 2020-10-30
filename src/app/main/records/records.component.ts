import { Component, OnInit } from '@angular/core';
import { filters } from '../student.interface';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  attributes =[
    "enrollment number",
    "first name",
    "middile name",
    "last name",
    "phone number",
    "Email",
    "alternate phone number",
    "alternate email",
    "batch",
    "course",
    "branch",
    "current semester",
    "current cgpa",
    "admission year",
    "passing year",
    "drop years",
    "permanent address line 1",
    "permanent address line 2",
    "permanent address state",
    "permanent address city",
    "permanent address country",
    "permanent address zip code",
    "current address line 1",
    "current address line 2",
    "current address state",
    "current address city",
    "current address country",
    "current address zip code",
    "I sem sgpa",
    "II sem sgpa",
    "III sem sgpa",
    "IV sem sgpa",
    "V sem sgpa",
    "VI sem sgpa",
    "VII sem sgpa",
    "VIII sem sgpa",
    "tenth board",
    "tenth passing year",
    "tenth aggregate percent",
    "tenth school",
    "tenth city",
    "tenth state",
    "tenth zip code",
    "twelth board",
    "twelth passing year",
    "twelth aggregate percent",
    "twelth school",
    "twelth city",
    "twelth state",
    "twelth zip code",
    "graduation degree",
    "graduation course",
    "graduation university",
    "graduation passing year",
    "graduation cgpa",
    "graduation city",
    "graduation state",
    "graduation zip code",
    "diploma course",
    "diploma university",
    "diploma passing year",
    "diploma aggregate percentage",
    "diploma city",
    "diploma state",
    "diploma zip code",
    "entry level",
    "total backlogs",
    "active backlogs",
    "year backlogs",
    "minor training",
    "minor project",
    "major training",
    "major project",
    "photo",
    "resume",
    "XII marksheet",
    "X marksheet",
    "diploma certificate",
    "degree certificate",
    "family income",
    "category",
    "date of birth",
    "gender",
    "father's name",
    "father's occupation",
    "mother's name",
    "mother's occupation"
  ];
  currentcollection:string;
  selectedattributes: number[]=[0,1,2,3,4,5];
  activecollections:string[];
  filters:filters={
    branch : '',
    course: '',
    minxii : '',
    ming: '',
    mind: '',
    minx: '',
    activebacklog: '',
    cgpa: ''
  };
  customquery:string ='';
  constructor(private rs: RecordsService) {
         this.rs.getactivecollections().then(collections=>{
           this.activecollections = collections;
         }).catch(err=>{
           console.log(err)
         })
   }

  ngOnInit(): void {
  }

  ischecked(i:number):boolean{
    let index = this.selectedattributes.indexOf(i);
    if (index === -1) {
      return false;
    }
    else return true;
  }

  syncdata(){
    this.rs.downloadcollectiondata(this.currentcollection).then(res=>{
      if(res){
        window.alert('download complete')
      }
    })
  }

  attchange(i){
    let index = this.selectedattributes.indexOf(i);
    if (index === -1) {
      this.selectedattributes.push(i);
    } else {
      this.selectedattributes.splice(index, 1);
    }
  }

  runquery(){
    this.rs.getrecordbyfilters(this.selectedattributes,this.filters);
  }

  runcustomquery(){
    this.rs.customquery(this.customquery);
  }

}
