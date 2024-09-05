export class ChaletDetails {
    codigo: any;
    constructor(
      public id: string,
      public nombre: string,
      public municipio: string,
      public ubicacion: string,
      public descripcion: string,
      public imgPrincipal: string,
      public tarifa: any[],
      public servicio: any[]
    ) {}
  }