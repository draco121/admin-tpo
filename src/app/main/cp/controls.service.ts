import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

export interface controls{
  collectionname: string;
  isactive: boolean;
  master_lock:boolean;
  secondary_lock: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  nullcontrol:controls = {collectionname: '',isactive: false, master_lock: false,secondary_lock: false}
  constructor(private afs: AngularFirestore) { }
  currentcontrol = new BehaviorSubject<controls>(this.nullcontrol);
  async getControlsList(): Promise<controls[]|null>{
        let list:controls[] =[];
     await this.afs.collection('controller').ref.get().then(snapshot=>{
        snapshot.docs.forEach(doc=>{
          let control = <controls>doc.data();
          list.push(control)
        })
      }).catch(err=>{
        console.log(err)
      })
    return list
  }

  async savecontrolchanges(control:controls):Promise<boolean>{
       let saved = false;
       await this.afs.collection('controller').ref.doc(control.collectionname).update(control)
       .then(res=>{
         saved = true;
       }).catch(err=>{
         console.log(err)
       })
       return saved;
  }

  async addnewcontrol(control: controls):Promise<boolean>{
    let added = false;
    await  this.afs.collection('controller').ref.doc(control.collectionname).
    set(control).then(res=>{
          added = true;
    }).catch(err=>{
      console.log(err);
    })

    return added;
  }
}