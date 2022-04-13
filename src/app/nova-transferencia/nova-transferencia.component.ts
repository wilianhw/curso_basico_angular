import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  @Output() aoTransmitir =  new EventEmitter<any>();

  tranferir() {
    console.log('Solicitado nova tranferencia');
    const valorEmitir = { valor: this.valor, destino: this.destino }
    this.aoTransmitir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
