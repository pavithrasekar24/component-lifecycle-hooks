import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productName: string = '';
  productDetails: any[] = ['Laptop', 'Wireless Mouse', 'Keyboard'];
  constructor() {}
  handleAdd() {
    if (this.productName) {
      this.productDetails.push(this.productName);
      this.productName = '';
    }
  }
  handleDelete(i: number) {
    this.productDetails.splice(i, 1);
  }
  ngOnInit() {}
}
