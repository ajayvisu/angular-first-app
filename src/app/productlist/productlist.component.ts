import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductService],
})
export class ProductlistComponent implements OnInit {
  constructor(public list: ProductService) {}

  increase() {
    this.list.addquantity();
  }
  ngOnInit(): void {}
}
