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
  @ContentChild('detailsProduct') detailsProduct: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('footerComp') footerComp: FooterComponent;

  @Output() handleDelete = new EventEmitter<number>();

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
    console.log('init');
  }

  ngDoCheck() {
    console.log('docheck');
  }

  ngAfterContentInit() {
    console.log('contentInit', this.detailsProduct);
    this.detailsProduct.nativeElement.style.color = this.colorName;
  }
  ngAfterContentChecked() {
    console.log('contentchecked', this.detailsProduct);
    this.detailsProduct.nativeElement.style.color = this.colorName;
  }
  ngAfterViewInit() {
    console.log('viewInit', this.name, this.footerComp.greeting);
    this.name.nativeElement.style.color = this.colorName;
  }

  ngAfterViewChecked() {
    console.log('viewchecked', this.name, this.footerComp.greeting);
    this.name.nativeElement.style.color = this.colorName;
  }
  ngOnDestroy() {
    console.log('destroy');
  }
}
