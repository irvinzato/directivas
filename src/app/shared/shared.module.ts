import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [  //La exporto para que otros modulos puedan hacer uso de esta directiva
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
