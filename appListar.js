const produtoNegocio = require('./negocio/emprestimo_negocio')


async function main() {
    const listaProdutos = await produtoNegocio.listar();
    console.log("Lista de Produtos",listaProdutos);
}

main();