import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MaterialModule],
})
export class SharedModule {}
