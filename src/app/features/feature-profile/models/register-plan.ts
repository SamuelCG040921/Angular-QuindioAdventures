export interface PlanDTO {
    nombre: string;
    municipio: string;
    ubicacion: string;
    descripcion: string;
    imagenes: string[];
    tarifas: Array<{ precio: number | null, temporada: string, horaSalida: string, horaLlegada: string }>;
  }
  