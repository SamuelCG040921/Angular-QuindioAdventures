export class ReservaPlanInfo{
    constructor(
        public id_reserva: number,
        public id_planV_usuario: number,
        public email_usuario: string,
        public documento: string,
        public cantPersonas: number,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public direccion: string,
        public precioFinal: number,
        public fecha: string,
        public fechaRegistro: string,
        public tarifa: any[],
        public estado: number
    ){}
}