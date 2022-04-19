export class Ingrediente {

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

    myFuncion() {
        console.log(this.idIngredient)
    }


    idIngredient : number = 0;
    strIngredient : string = '';
    strDescription : string = '';
    strType : string = '';
    strAlcohol : string = '';
    strABV : string = '';
}
