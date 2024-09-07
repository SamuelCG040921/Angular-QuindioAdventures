import { Component, OnInit, Input } from '@angular/core';
import { ReservesService } from '../../services/reserves.service';

@Component({
  selector: 'app-scoped-reserve',
  templateUrl: './scoped-reserve.component.html',
  styleUrls: ['./scoped-reserve.component.scss']
})
export class ScopedReserveComponent implements OnInit {
  reserves: any[] = [];
  selectedReserve: any = null;
  isModalOpen = false;

  @Input() reserve = {
    numero: 0,
    codigo: 0,
    tipo: "",
    precio: 0,
    direccion: '',
    telefono: '',
    checkin: '',
    checkout: '',
    estado: ''
  };

  constructor(private reservesService: ReservesService) { }

  ngOnInit() {
    this.cargarReservas(); // Llamar al método para cargar reservas al iniciar
  }

  cargarReservas() {
    this.reservesService.getReservasByEmail().subscribe({
      next: (data) => {
        this.reserves = data;
        console.log('Reservas cargadas:', data);
      },
      error: (error) => {
        console.error('Error al cargar las reservas:', error);
      }
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
