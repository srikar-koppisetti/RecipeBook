import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'No Success';

  allowSuccess = false;

  constructor(){
    setTimeout(() =>{
      this.allowSuccess = true;
    },2000);
  }

  onClickSuccess(){
    this.title = 'Yes, it is success!';
  }
}
