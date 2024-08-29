export class PlanInfo {
    id_planV: number;
    nombre_planV: string;
    municipio_planV: string;
    ubicacion_planV: string;
    descripcion: string;
    imagenes: { [key: string]: string};
    tarifas: any;

    constructor(
        id_planV: number,
        nombre_planV: string,
        municipio_planV: string,
        ubicacion_planV: string,
        descripcion: string,
        imagenes: { [key: string]: string},
        tarifas: any
    ){
        this.id_planV = id_planV
        this.nombre_planV = nombre_planV;
        this.municipio_planV = municipio_planV;
        this.ubicacion_planV = ubicacion_planV;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
        this.tarifas = tarifas;
    }
}
