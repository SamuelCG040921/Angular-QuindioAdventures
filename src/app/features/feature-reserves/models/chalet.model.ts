// chalet.model.ts
export class Chalet {
    constructor(
        public nombre: string,
        public ubicacion: string,
        public descripcion:string,
        public imgPrincipal:string,
        public servicios:string,
        public tarifas:string
      ) {}
}
