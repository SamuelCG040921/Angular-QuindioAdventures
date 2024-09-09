export class PlansInfoPerfil {
  id_plan: number;
  nombre_plan: string;
  municipio_plan: string;
  ubicacion_plan: string;
  caracteristicas: string;
  fechaRegistro_plan: string;
  imagenes: { [key: string]: string }; // Este es el tipo correcto
  tarifas: any; // Ajusta según el formato real de tarifas

  constructor(
    id_plan: number,
    nombre_plan: string,
    municipio_plan:string,
    ubicacion_plan: string,
    caracteristicas: string,
    fechaRegistro_plan:string,
    imagenes: { [key: string]: string },
    tarifas: any,
  ) {
    this.id_plan = id_plan;
    this.nombre_plan = nombre_plan;
    this.municipio_plan = municipio_plan;
    this.ubicacion_plan = ubicacion_plan;
    this.caracteristicas = caracteristicas;
    this.fechaRegistro_plan = fechaRegistro_plan
    this.imagenes = imagenes;
    this.tarifas = tarifas;
  }
}