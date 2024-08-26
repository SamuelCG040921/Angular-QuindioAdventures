export class ChaletDetails {
    constructor(
      public id: string,
      public nombre: string,
      public ubicacion: string,
      public descripcion: string,
      public imgPrincipal: string,
      public tarifa: any[],
      public servicio: any[]
    ) {}
  }