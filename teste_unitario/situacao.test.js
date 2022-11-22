const cadastro = require("./persistence/situacao_persistence")

//Cenario de Sucesso!
test ('Buscar Por Id 2 deve retornar Produto 2',
    function() {
        let produto2 = {
            id:2, 
            nome:"Produto 2", 
            preco:20
        };

        expect(cadastro.buscarPorId(2))
            .toEqual(produto2);
    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Buscar Por Id 6 deve gerar exceção id nao encontrado',
    function() {
        const errIdNaoEncontrado = "ID nao encontrado";
        expect(() => cadastro.buscarPorId(6))
            .toThrow(errIdNaoEncontrado);
    }
)

test ('Inserir Produto 4 deve ser inserido na lista com id 4 gerado',
    function() {
        const produtoInserir = {nome:"Produto 4", preco:40};
        cadastro.inserir(produtoInserir);
        expect(cadastro.listar())
            .toEqual(listaInseridoEsperado);
    })

//Cenário de Sucesso
test ('Alterar Produto com id 1 para nome "Produto X" e preco 100 deve atualizar na lista',
    function() {
        const produtoAtualizadoEsperado = {id:1, nome:"Produto X", preco:100};
        const produtoAtualizar = {nome:"Produto X", preco:100};
        const idAtualizar = 1;

        cadastro.atualizar(idAtualizar, produtoAtualizar);

        expect(cadastro.buscarPorId(1))
            .toEqual(produtoAtualizadoEsperado);

        expect(cadastro.listar())
            .toEqual(listaAtualizadoEsperado);

    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Atualizar o produto com Id 6 deve gerar exceção id nao encontrado',
    function() {
        const produtoAtualizar = {
            nome:"Produto 6", 
            preco:600
        };
        const errIdNaoEncontrado = "ID nao encontrado";
        expect(() => cadastro.atualizar(6, produtoAtualizar))
            .toThrow(errIdNaoEncontrado);
    }
)

//Cenário de Sucesso
test ('Deletar o produto com id 1 deve remover tal produto da lista',
    function() {
        cadastro.deletar(1);
        expect(cadastro.listar())
            .toEqual(listaDeletadoEsperado);
    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Deletar o produto com Id 6 deve gerar exceção id nao encontrado',
    function() {
        const errIdNaoEncontrado = "ID nao encontrado";
        expect(() => cadastro.deletar(6))
            .toThrow(errIdNaoEncontrado);
    }
)
