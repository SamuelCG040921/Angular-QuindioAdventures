export class ChaletsInfoPerfil {
    id_chalet: number;
    nombre_chalet: string;
    municipio_chalet: string;
    ubicacion_chalet: string;
    caracteristicas: string;
    fechaRegistro_chalet: Date;
    imagenes: { [key: string]: string }; // Este es el tipo correcto
    tarifas: any; // Ajusta según el formato real de tarifas
    servicios: string[];
  
    constructor(
      id_chalet: number,
      nombre_chalet: string,
      municipio_chalet:string,
      ubicacion_chalet: string,
      caracteristicas: string,
      fechaRegistro_chalet:Date,
      imagenes: { [key: string]: string },
      tarifas: any,
      servicios: string[]
    ) {
      this.id_chalet = id_chalet;
      this.nombre_chalet = nombre_chalet;
      this.municipio_chalet = municipio_chalet;
      this.ubicacion_chalet = ubicacion_chalet;
      this.caracteristicas = caracteristicas;
      this.fechaRegistro_chalet = fechaRegistro_chalet
      this.imagenes = imagenes;
      this.tarifas = tarifas;
      this.servicios = servicios;
    }
  }
  