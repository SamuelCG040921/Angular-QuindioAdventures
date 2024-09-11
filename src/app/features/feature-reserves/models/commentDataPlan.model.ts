export class CommentDataPlan {
    constructor(
        public id_opinion: number,
        public email_usuario: string,
        public id_planV_usuario: number,
        public opinion: string,
        public fechaCreacion: string,
        public hora: string,
        public calificacion: number,
        public nombres: string,
        public apellidos: string,
        public image: string
    ){}
}