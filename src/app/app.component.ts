import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
parentComponent = [
  {
    id:1, name:"Ajay"
  },
  {
    id:2, name:"Visu"
  }
]
  title = 'my-angular-app';
generatednumber : number | undefined;

getNumber(value : number){

this.generatednumber = value;
}



}

