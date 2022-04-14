import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/tranferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransmitir =  new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  tranferir() {
    console.log('Solicitado nova tranferencia');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado)
      this.limparCampos();
    },
    error => {
      console.error(error)
    });

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
