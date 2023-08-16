
class Item{
    constructor(stringItem){
        const partes = stringItem.split(";");
        this.nome = partes[0]
        this.descricao = partes[1]
        this.preco = partes[2]
    }
}

export { Item };
