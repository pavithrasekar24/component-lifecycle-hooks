import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: string = '';
  @Input() details: any[] = [];
  @Output() handleDelete = new EventEmitter<number>();

  @ContentChild('detailsProduct') detailsProduct: ElementRef;
  constructor() {
    console.log('constructor');
  }

  handleClick(i: number) {
    this.handleDelete.emit(i);
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
    console.log('contentInit', this.detailsProduct);
  }
  ngAfterContentChecked() {
    console.log('contentChecked');
  }

  // ngAfterViewInit() {
  //   console.log('viewInit');
  // }

  // ngAfterViewContent() {
  //   console.log('viewContent');
  // }
}
