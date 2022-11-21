function validarCategoria(categoria) {
    return categoria && categoria.nome && categoria.preco &&
            typeof categoria.nome == 'string' && 
            typeof categoria.preco == 'number'
}

module.exports = {
    validarCategoria
}