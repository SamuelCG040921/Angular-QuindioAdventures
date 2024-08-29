export interface ChaletDTO {
    nombre: string;
    municipio: string;
    direccion: string;
    descripcion: string;
    servicios: string[];
    imagenes: string[];
    tarifas: Array<{ precio: number | null, temporada: string, tipoHabitacion: string }>;
  }
  