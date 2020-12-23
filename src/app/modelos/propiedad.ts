export class Propiedad {
    constructor(
        public _id: String,
        public nombre: String,
        public categoria: String,
        public localidad: String,
        public direccion: String,
        public descripcion: String,
        public precio: Number,
        public moneda: String,
        public imagen: String
    ){}
}