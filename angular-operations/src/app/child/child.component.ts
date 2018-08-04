import { Component, OnInit,Input, Output, EventEmitter, OnDestroy ,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy, OnChanges {

  @Input()
  organization : string;
  @Output() sendUpdatedOrgFromChild = new EventEmitter<string>();

  constructor() { }

  public sendUpdatedDataToParent() : void {
     this.sendUpdatedOrgFromChild.emit("IT Services Limited");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('called !!');
    for (let propName in changes) {  
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
    
            console.log(curVal);
            console.log(prevVal);
         }
  }
  ngOnInit() {
  }
  ngOnDestroy(){
  }

}
