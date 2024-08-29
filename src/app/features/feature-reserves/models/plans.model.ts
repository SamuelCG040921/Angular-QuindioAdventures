export class PlansDetails {
    constructor(
      public id: string,
      public nombre: string,
      public municipio: string,
      public ubicacion: string,
      public descripcion: string,
      public imgPrincipal: string,
      public tarifa: any[]
    ) {}
  }