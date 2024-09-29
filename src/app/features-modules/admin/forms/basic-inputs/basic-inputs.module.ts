import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicInputsRoutingModule } from './basic-inputs-routing.module';
import { BasicInputsComponent } from './basic-inputs.component';


@NgModule({
  declarations: [
    BasicInputsComponent
  ],
  imports: [
    CommonModule,
    BasicInputsRoutingModule,
    FormsModule // Add this line
  ]
})
export class BasicInputsModule { }
