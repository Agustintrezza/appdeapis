export class Pokemon {

    constructor(obj?: any) {
        Object.assign(this, obj);
    }


    name : string = '';
    url : string = '';
    is_hidden : boolean = false;
    slot : number = 0;
    game_index : number = 0;
    rarity : number = 0;
    id : number = 0;
    abilities: any[] = [];
    sprites: string = '';
    front_default : any;
    descriptions: string = '';

}