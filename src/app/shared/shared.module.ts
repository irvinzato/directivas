import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [  //La exporto para que otros modulos puedan hacer uso de esta directiva
    ErrorMsgDirective
  ]
})
export class SharedModule { }
