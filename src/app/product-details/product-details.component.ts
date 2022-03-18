import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('changes', changes);
  }
  ngOnInit() {
    console.log('onInit');
  }
  ngDoCheck() {
    console.log('check');
  }

  ngAfterContentInit() {
    console.log('contentInit');
  }
  ngAfterContentChecked() {
    console.log('contentChecked');
  }

  ngAfterViewInit() {
    console.log('viewInit');
  }

  ngAfterViewContent() {
    console.log('viewContent');
  }
}
