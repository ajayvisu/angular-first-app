import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {name:'raj', age:'10', gender:'male'},
    {name:'raja', age:'20', role:'male'},
    {name:'sana', age:'25', role:'female'},
    {name:'jsona', age:'23', role:'female'},
  ]

}
