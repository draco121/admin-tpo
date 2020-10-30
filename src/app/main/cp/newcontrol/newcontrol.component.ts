import { Component, OnInit } from '@angular/core';
import { controls, ControlsService } from '../controls.service';

@Component({
  selector: 'app-newcontrol',
  templateUrl: './newcontrol.component.html',
  styleUrls: ['./newcontrol.component.scss']
})
export class NewcontrolComponent implements OnInit {

  constructor(private controls: ControlsService) { }

  ngOnInit(): void {
  }
  collectionname :string =''
  shownewform= false;
  controlladded = false;
  add(){
      let newcontrol:controls ={
        collectionname: this.collectionname,
        isactive: false,
        master_lock: false,
        secondary_lock: false
      }

      this.controls.addnewcontrol(newcontrol).then(res=>{
        if(res)
        {
            this.controlladded = true;
            this.shownewform = false;
            setTimeout(() => {
              this.controlladded = false;
            }, 2000);
        }else{
          console.log('error')
        }
      }).catch(err=>{
        console.log(err);
      })
  }

}
