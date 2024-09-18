import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
