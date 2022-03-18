import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: string = '';
  @Input() details: any[] = [];
  @Input() colorName: string = '';
  @Output() handleDelete = new EventEmitter<number>();

  @ContentChild('detailsProduct') detailsProduct: ElementRef;
  @ViewChild('footer') footer: ElementRef;
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
    // this.detailsProduct.nativeElement.setAttribute(
    //   'style',
    //   'color:' + this.colorName
    // );
  }
  ngAfterContentChecked() {
    console.log('contentChecked');
    this.detailsProduct.nativeElement.setAttribute(
      'style',
      'color:' + this.colorName
    );
  }

  ngAfterViewInit() {
    console.log('viewInit', this.footer);
  }

  // ngAfterViewContent() {
  //   console.log('viewContent');
  // }
}
