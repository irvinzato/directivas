import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion: boolean ){
    if( condicion ){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();   //ViewContainer es el que me mostrara o eliminara el elemento
    }
  }

  /* "TemplateRef" es parecido a "ElementRef", solo que este template esta en un nivel mas alto */
  constructor( private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef  ) {
    console.log("directiva customIf");
   }

}


/* Otra forma de mostrar y ocultar un elemento es jugando con las clases de Js, por ejemplo, si estuviera en mi directiva de error-msg:
  @Input() set valido( valor: boolean ){
    if( valor ){    
      this.htmlElement.nativeElement.classList.add('hidden');     //Solo agrego o quito una clase que en Css tiene display: none; segun el caso
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

*/