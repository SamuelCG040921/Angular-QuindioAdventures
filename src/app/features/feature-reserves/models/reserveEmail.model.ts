export class ReservaEmail{
    constructor(
        public id_reserva: number,
        public id_chalet_usuario: number,
        public email_usuario: string,
        public documento: string,
        public cantPersonas: number,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public direccion: string,
        public precioFinal:number,
        public estancia: string,
        public fechaInicio: string,
        public fechaFin: string,
        public fechaRegistro: string,
        public tarifa: any[],
        public estado: number
    ){}
}