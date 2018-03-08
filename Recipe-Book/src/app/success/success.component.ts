import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  title = 'No Server';
  wait = false;
  serverName = '';

  constructor() {

    setTimeout(()=>{
      this.wait = true;
    },2000);

   }

  ngOnInit() {
  }

  onClickServer(){
    this.title = 'Server Started ' + this.serverName;
    console.log('Hello World!!');
  }

  

}
