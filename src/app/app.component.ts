import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personas = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 25 },
    { nombre: 'María', apellido: 'González', edad: 30 },
    { nombre: 'Carlos', apellido: 'López', edad: 22 },
    { nombre: 'Laura', apellido: 'Martínez', edad: 28 },
    { nombre: 'Pedro', apellido: 'Sánchez', edad: 35 },
  ];
  mostrarInputs = false;
  nuevoNombre: string = '';
  nuevoApellido: string = '';
  nuevaEdad: number = 0;

  guardarNuevo() {
    this.personas.push({
      nombre: this.nuevoNombre,
      apellido: this.nuevoApellido,
      edad: this.nuevaEdad,
    });
    this.resetForm();
  }

  cancelarNuevo() {
    this.resetForm();
  }

  resetForm() {
    this.mostrarInputs = false;
    this.nuevoNombre = '';
    this.nuevoApellido = '';
    this.nuevaEdad = 0;
  }
}
