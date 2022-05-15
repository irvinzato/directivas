import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  colorQueQuiero: string = 'orange';
  nombreDado: string = 'Irving Rivera';

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    let aleatorio = Math.random().toString();
    this.nombreDado = ` Irvinzato  ${aleatorio} `;
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.colorQueQuiero = color;
  }

}
