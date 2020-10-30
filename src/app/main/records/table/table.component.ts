import { Component, OnInit } from '@angular/core';
import { tablecontent } from '../../student.interface';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private rs : RecordsService) {
    this.rs.processed.subscribe(results=>{
      this.tabeldata = results;
    })
   }
  tabeldata: tablecontent[]=[];
  ngOnInit(): void {
  }

  downloadexcel(){
    this.rs.exceldownload();
  }
}
