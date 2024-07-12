export class Reserva {
    constructor(
        public documento: string,
        public cantAdultos: number,
        public cantNinos: number,
        public nombre: string,
        public fechaFin: Date,
        public fechaInicio: Date
      ) {}
 }