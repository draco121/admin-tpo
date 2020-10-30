import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import alasql from 'alasql';
import { BehaviorSubject } from 'rxjs';
import { ControlsService } from '../cp/controls.service';
import { filters, student, tablecontent } from '../student.interface';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  attributes = [
    "rollno",
    "fname",
    "mname",
    "lname",
    "phone",
    "email",
    "altphone",
    "altemail",
    "batch",
    "course",
    "branch",
    "curr_sem",
    "curr_cgpa",
    "admission_year",
    "passing_year",
    "drop_year",
    "p_add_l1",
    "p_add_l2",
    "p_state",
    "p_city",
    "p_country",
    "p_zip",
    "c_add_l1",
    "c_add_l2",
    "c_state",
    "c_city",
    "c_country",
    "c_zip",
    "sem1_sgpa",
    "sem2_sgpa",
    "sem3_sgpa",
    "sem4_sgpa",
    "sem5_sgpa",
    "sem6_sgpa",
    "sem7_sgpa",
    "sem8_sgpa",
    "tn_board",
    "tn_pass_year",
    "tn_agg_percent",
    "tn_school",
    "tn_city",
    "tn_state",
    "tn_zip",
    "tw_board",
    "tw_pass_year",
    "tw_agg_percent",
    "tw_school",
    "tw_city",
    "tw_state",
    "tw_zip",
    "g_degree",
    "g_course",
    "g_university",
    "g_pass_year",
    "g_agg_percent",
    "g_city",
    "g_state",
    "g_zip",
    "d_course",
    "d_university",
    "d_pass_year",
    "d_agg_percent",
    "d_city",
    "d_state",
    "d_zip",
    "entry_level",
    "total_backlog",
    "active_backlog",
    "fail_year",
    "minor_training",
    "minor_project",
    "major_training",
    "major_project",
    "photolink",
    "resumelink",
    "twlink",
    "tnlink",
    "dlink",
    "glink",
    "family_income",
    "category",
    "dob",
    "gender",
    "father_name",
    "father_occ",
    "mother_name",
    "mother_occ"
  ];

  data: student[] = [];
  result = [];
  processed = new BehaviorSubject<tablecontent[]>([])
  constructor(private controls: ControlsService, private afs: AngularFirestore) {
    this.data = JSON.parse(window.localStorage.getItem('data'));
  }

  async getactivecollections(): Promise<string[]> {
    let activecollections: string[] = [];
    await this.controls.getControlsList().then(controls => {
      controls.forEach(control => {
        if (control.isactive) {
          activecollections.push(control.collectionname)
        }
      })
    }).catch(err => {
      console.log(err)
    })
    return activecollections;
  }

  async downloadcollectiondata(collectionname: string): Promise<boolean | void> {
    let tempdata = []
    return await this.afs.collection(collectionname).ref.get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        tempdata.push(<student>doc.data());
        window.localStorage.setItem('data', JSON.stringify(this.data))
      })
    }).then(() => {
      this.data = tempdata;
      return true;
    }).catch(err => {
      console.log(err)
    })
  }

  async getrecordbyfilters(attributes: number[], filters: filters) {
    let query = '';
    await this.querybuilder(attributes, filters).then(res => {
      query = res;
      console.log(query)
    });
    if (this.data == null) {
      window.alert('please syncronise the database')
    } else {
      this.result = alasql(query, [this.data]);
      console.log(this.result)
      this.processed.next(this.result);

    }

  }

  async querybuilder(attributes: number[], filters: filters) {
    let part1 = '';
    await this.attributebuilder(attributes).then(res => {
      part1 = part1 + res;
    });
    let part2 = '';
    await this.condetionbuilder(filters).then(res => {
      part2 = res;
    });
    let query = 'SELECT ' + part1 + ' ' + 'FROM ? ' + part2;
    return query;
  }

  async attributebuilder(attributes: number[]) {
    let attributestring = '';
    await attributes.sort((a,b)=>{return a-b});
    await attributes.forEach(index => {
      attributestring = attributestring + ',' + this.attributes[index];
    });
    attributestring = attributestring.slice(1, attributestring.length);
    return attributestring;
  }

  async condetionbuilder(filters: filters) {
    let query = '';
    if (filters.branch != '')
      query = query + ' branch = ' + '"' + filters.branch + '" AND';
    if (filters.course != '')
      query = query + ' course = ' + '"' + filters.course + '" AND';
    if (filters.cgpa != '')
      query = query + ' curr_cgpa >= ' + filters.cgpa + ' AND';
    if (filters.minx != '')
      query = query + ' tn_agg_percent >= ' + filters.minx + ' AND';
    if (filters.minxii != '') {
      if (filters.mind != '') {
        query = query + '(tw_agg_percent >= ' + filters.minxii + ' OR ' + 'd_agg_percent >= ' + filters.mind + ') AND';
      } else {
        query = query + ' tw_agg_percent >= ' + filters.minxii + ' AND';
      }
    }
    if (filters.activebacklog != '')
      query = query + ' active_backlog <= ' + filters.activebacklog + ' AND';
    let lastindex = query.lastIndexOf(' ');
    query = query.substring(0, lastindex);
    if (query !== '') {
      query = 'WHERE ' + query;
    }
    return query;
  }


  customquery(query:string){
      this.result = alasql(query, [this.data]);
      console.log(this.result)
      this.processed.next(this.result);
  }

  exceldownload() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.result);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
    XLSX.writeFile(wb, 'datasheet.xlsx');
  }
}
