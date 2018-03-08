import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  userName = '';
  notNull = true;

  constructor() {
  }

  onKey(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName !== ''){
      this.notNull = false;
    }else{
      this.notNull = true;
    }
  }

  onClick(){
    this.userName = '';
    if(this.userName !== ''){
      this.notNull = false;
    }else{
      this.notNull = true;
    }
  }

  ngOnInit() {
  }

}
