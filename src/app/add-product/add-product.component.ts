import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productName: string = '';
  productDetails: any[] = ['Laptop', 'Wireless Mouse', 'Keyboard'];
  productTitle: string = 'Product Details';
  colorName: string = 'blue';

  constructor() {}
  handleAdd() {
    if (this.productName) {
      this.productDetails.push(this.productName);
      this.productName = '';
    }
  }

  handleChange(event: any) {
    this.colorName = event.target.value;
  }
  handleDelete(i: number) {
    this.productDetails.splice(i, 1);
  }
  ngOnInit() {}
}
