import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'   //Es el nombre con el que angular sabra como se llama, pero debe ser algo que no choque con algo que ya existe o propio de angular
})
export class ErrorMsgDirective implements OnInit {

  private _color = 'red';
  private _mensaje = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  /* Cuando teenemos Inputs setters se ejecutan si y solo si cambia la propiedad, en este caso de color */
  /* Metodo set en los Input que recibo es otra forma de realizar el cambio, sin el onChanges,los metodos en el ngOnInit y tantos ifs */
  @Input() set color( valor: string ) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }

  @Input() set mensaje( valor: string ) {
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
    console.log("element ", this.htmlElement);
  }
 
  ngOnInit(): void {
    /* Aqui le digo que tome valores desde que inicia el componente, por si no me pasan nada */
    this.setColor();
    this.setText(); 
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text'); //Tambien puedo manipular el DOM como en Js y cambiarle propieades, en este caso le añadire una clase de Botstrap al llamar la directiva
  }

  setText() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
