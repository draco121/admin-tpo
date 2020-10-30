import { Component, OnInit } from '@angular/core';
import { controls, ControlsService } from '../controls.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit{
  control: controls;
  controlcopy: controls;
  iscontrolchanged = false;
  issaved = false;
  constructor(private controls: ControlsService) {
    this.controls.currentcontrol.subscribe(data=>{
      this.control = data;
      this.controlcopy = data;
    })
   }


  ngOnInit(): void {
  }

  changeone(){
    if(!this.iscontrolchanged)
    {
      this.iscontrolchanged = true;
    }
    this.control.isactive = !this.control.isactive;
  }
  changetwo(){
    if(!this.iscontrolchanged)
    {
      this.iscontrolchanged = true;
    }
    this.control.master_lock = !this.control.master_lock;
  }
  changethree(){
    if(!this.iscontrolchanged)
    {
      this.iscontrolchanged = true;
    }
    this.control.secondary_lock = !this.control.secondary_lock;
  }

  savecontrols(){
    this.controls.savecontrolchanges(this.control).then(res=>{
      if(res)
      {
        let closebtn = document.getElementById('close')
        closebtn.click()
          this.issaved = true;
          this.iscontrolchanged = false;
          setTimeout(() => {
            this.issaved = false;
          }, 2000);
      }
    }).catch(err=>{
      console.log(err);
    })
  }


}
