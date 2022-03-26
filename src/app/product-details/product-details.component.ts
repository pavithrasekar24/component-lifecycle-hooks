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
import { FooterComponent } from '../footer/footer.component';

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
  @ViewChild('footerComp') footerComp: FooterComponent;
  @ViewChild('footerTitle') footerTitle: ElementRef;

  constructor() {
    console.log('constructor');
  }

  handleClick(i: number) {
    this.handleDelete.emit(i);
    this.footerComp.handleAlert();
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('changes', changes, this.detailsProduct);
  }
  ngOnInit() {
    console.log('onInit');
  }
  ngDoCheck() {
    console.log('check');
  }

  ngAfterContentInit() {
    console.log('contentInit', this.detailsProduct);
    this.setColor();
  }

  setColor() {
    this.detailsProduct.nativeElement.setAttribute(
      'style',
      'color:' + this.colorName
    );
  }
  ngAfterContentChecked() {
    console.log('contentChecked');
    this.setColor();
  }

  ngAfterViewInit() {
    console.log('viewInit', this.footerTitle);
    this.footerTitle.nativeElement.setAttribute(
      'style',
      'background-color:' + this.colorName
    );
    console.log('footercompoet', this.footerComp.greeting);
  }

  ngAfterViewChecked() {
    console.log('viewChecked', this.footerTitle);
    this.footerTitle.nativeElement.setAttribute(
      'style',
      'background-color:' + this.colorName
    );
  }
}
