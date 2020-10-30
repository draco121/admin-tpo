import { Component, OnInit } from '@angular/core';
import { controls, ControlsService } from '../controls.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
list:controls[];
  constructor(private control: ControlsService) {
      this.control.getControlsList().then(controls=>{
        this.list = controls;
      })
  }

  ngOnInit(): void {
  }

  changecontrol(control: controls){
      this.control.currentcontrol.next(control);
  }
}
