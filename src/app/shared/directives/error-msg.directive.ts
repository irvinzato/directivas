import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'   //Es el nombre con el que angular sabra como se llama, pero debe ser algo que no choque con algo que ya existe o propio de angular
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es necesario';

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
    console.log("element ", this.htmlElement);
  }
 
  ngOnInit(): void {
    this.setColor();
    this.setText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.color){
      let newColor = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = newColor;
    }
    if(changes.mensaje){
      let newMensaje = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.innerText = newMensaje;
    }
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text'); //Tambien puedo manipular el DOM como en Js y cambiarle propieades, en este caso le añadire una clase de Botstrap al llamar la directiva
  }

  setText() {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
