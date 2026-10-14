import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './components/lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Lamp';
  enchufado = false;
  estadoLampara : 'Apagada' | 'Encendida' = 'Apagada';

  // Listener eventos
  onClickDesenchufar() {
    this.enchufado = false;
  }
  onClickEnchufar() {
    this.enchufado = true;
  }
  onCambioEstadoLampara(estado: 'Apagada' | 'Encendida') {
    this.estadoLampara = estado;
  }
}
