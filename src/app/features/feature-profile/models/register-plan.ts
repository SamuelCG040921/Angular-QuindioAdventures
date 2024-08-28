export interface PlanDTO {
    nombre: string;
    direccion: string;
    descripcion: string;
    imagenes: string[];
    tarifas: Array<{ precio: number | null, temporada: string, tipoHabitacion: string }>;
  }
  