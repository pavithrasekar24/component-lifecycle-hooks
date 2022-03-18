import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [CommonModule],
  exports: [MatCardModule, MatFormFieldModule],
  declarations: [],
})
export class MaterialModule {}
