import { Cardapio } from "./cardapio.js";

class CaixaDaLanchonete {

  calcularValorDaCompra(metodoDePagamento, itens) {
    var cardapio = new Cardapio("./cardapio.json");
    this.carrinho = [];

    var ModificadorDePagamento = 0;
    var Total = 0;

    const Dependencias = [];
    var NumDependencias = 0;

    switch (metodoDePagamento) {
      case 'dinheiro':
        ModificadorDePagamento = 0.95;
        break;
      case 'debito':
        ModificadorDePagamento = 1;
        break;
      case 'credito':
        ModificadorDePagamento = 1.03;
        break;
      default:
        return "Forma de pagamento inválida!";
    }

    var cardAtual = cardapio.getCardapio();

    if (itens == 0) {
      return "Não há itens no carrinho de compra!";
    }

    for (var i = 0; i < itens.length; i++) {

      const item = itens[i].split(",");
      this.nome = item[0];
      this.quantidade = item[1];

      if (Number(this.quantidade) == 0) {
        return "Quantidade inválida!";
      }

      for (var j = 0; j < cardAtual.length; j++) {
        if (this.nome == cardAtual[j].nome) {
          var valor = Number(cardAtual[j].preco.slice(2))
          Total = Total + valor * Number(this.quantidade);
          this.carrinho.push(cardAtual[j].nome);

          if (cardAtual[j].descricao.includes("extra")) {
            //Conferir se esta no carrinho
            var itemPrincipal = cardAtual[j].descricao.split("(")[1].split(" ")[2].split(")")[0];
            if(!this.carrinho.includes(itemPrincipal)){
              console.log(itemPrincipal)
              console.log(this.carrinho)
              return "Item extra não pode ser pedido sem o principal";
            }
          }
          break
        }

        if (j == cardAtual.length - 1) {
          return "Item inválido!";
        }
      }
    }

    const x = cardapio.getCardapio()
    console.log(x)

    var precofinal = Total * ModificadorDePagamento;
    var stringpreco = precofinal.toFixed(2);
    var resposta = "R$ " + stringpreco.toString().replace('.', ',');
    return resposta;
  }
}

export { CaixaDaLanchonete };
