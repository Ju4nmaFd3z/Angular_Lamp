import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  imports: [],
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css'
})
export class LamparaComponent {
  // Inputs y outputs
  enchufada = input<boolean>(false);
  estadoLampara = output<'Apagada' | 'Encendida'>();

  // Propiedades componentes
  encendida = false;

  // Eventos
  onApagarEncender() {
    this.encendida = !this.encendida;
    this.estadoLampara.emit(this.encendida ? 'Encendida' : 'Apagada');
  }
}
