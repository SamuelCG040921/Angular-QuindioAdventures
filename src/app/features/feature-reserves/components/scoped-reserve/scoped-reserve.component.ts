import { Component, OnInit, Input } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';



@Component({
  selector: 'app-scoped-reserve',
  templateUrl: './scoped-reserve.component.html',
  styleUrl: './scoped-reserve.component.scss'
})
export class ScopedReserveComponent implements OnInit {
  reserves: any;
  selectedReserve: any = null;
  isModalOpen = false;

  @Input() reserve = {
    numero: 0,
    codigo: 0,
    tipo: "",
    precio: 0,
    direccion: '',
    telefono: '',
    checkin:'',
    checkout:'',
    estado:''
   };

  constructor(private reservesService: ReservesService) { }

  ngOnInit() {
    this.reservesService.getReserves()
      .subscribe(res => {
        this.reserves = res;
      });
  }

  openModal(reserve: any): void {
    this.selectedReserve = reserve;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedReserve = null;
  }

  trackById(index: number, reserve: any): string {
    return reserve.codigo; // Usa un identificador único para cada reserva, como la propiedad 'codigo'
  }

}
