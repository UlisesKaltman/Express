export default class Alumno
{
    constructor(UserName, DNI, Edad)
    { 
        this.UserName = UserName; 
        this.DNI =DNI; 
        this.Edad= Edad;
    }

    toString() {
        return "La edad es " + this.Edad;
    }

}