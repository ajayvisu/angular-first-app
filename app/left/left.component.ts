import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  providers:[]
})
export class LeftComponent implements OnInit {

  constructor() { }

  @Input('childComponent') childvariable : any;
  @Output() userData = new EventEmitter<number>()

  ngOnInit(): void {
  }

  generatenum(){
    const randomnum = Math.random()
    this.userData.emit(randomnum)
  }

}
