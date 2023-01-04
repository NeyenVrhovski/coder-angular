import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './pipes/name/name.pipe';
import { FontDirective } from './directives/font.directive';



@NgModule({
  declarations: [
    NamePipe,
    FontDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NamePipe,
    FontDirective
  ]
})
export class SharedModule { }
