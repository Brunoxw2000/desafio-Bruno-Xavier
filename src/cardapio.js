import * as fs from 'fs';
import { Item } from './item.js';

class Cardapio{

    constructor(arquivo){
        const fileBuffer = fs.readFileSync(arquivo, "utf8")
        const contentJson = JSON.parse(fileBuffer)
        //console.log(contentJson)

        this.listaItens = [];

        for(var i = 0; i < contentJson.itens.length; i++){
            //console.log(contentJson.itens[i])
            this.listaItens.push(new Item(contentJson.itens[i]))
        }
    }

    getCardapio(){
        return this.listaItens
    }

    PrintaCardapio(){
        console.log(this.listaItens)
    }
}

export { Cardapio };