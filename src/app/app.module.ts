import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MaterialModule } from './material/material.module';
import { MatInputModule } from '@angular/material/input/input-module';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, MatInputModule],
  declarations: [AppComponent, HelloComponent, ProductDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
