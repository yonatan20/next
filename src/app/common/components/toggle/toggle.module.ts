import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToggleComponent} from "./toggle.component";

@NgModule({
  declarations: [ToggleComponent],
  exports: [ToggleComponent],
  imports: [CommonModule]
})
export class ToggleModule { }
