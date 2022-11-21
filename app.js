const emprestimoNegocio = require('./negocio/emprestimo_negocio')

async function main() {
      
    const listaEmprestimo = await emprestimoNegocio.listar();
    console.log("Lista de Produtos",listaEmprestimo);
 
    try{ 
        const emprestimo_1 = await emprestimoNegocio.buscarPorId(1);
        console.log("Emprestimo 1", emprestimo_1);
    } catch (err) {                                                                           
        console.log("Erro", err);
    }

    try{ 
        const emprestimo_2 = await emprestimoNegocio.buscarPorId(2);
        console.log("Empretimo 2 = ", emprestimo_2);
    } catch (err) {
        console.log("Erro", err);
    }

    //Inesistente  
    try{
        const emprestimo_3 = await emprestimoNegocio.buscarPorNome('PEQUENO PRINCIPE');
        console.log("Emprestimo 3 = 'PEQUENO'", emprestimo_3);
    } catch(err) {
        console.log("Erro", err);
    }

    try{
        const emprestimo_4 = await emprestimoNegocio.buscarPorNome('DOM CASMURRO');
        console.log("Emprestimo 4 = ", emprestimo_4);
    } catch(err) {
        console.log("Erro", err);
    }

   
    //Caso de sucesso
    try{
        const emprestimoAtualizado = await emprestimoNegocio.atualizar(2, { id_situacao: '2', dt_entrega: '25/12/2022 00:00:01'});
        console.log("Emprestimo Atualizado", emprestimoAtualizado);
    }
    catch(err){
        console.log("Erro", err);
    }

    //Caso de insucesso: Parametro preco é string
    try{
        const emprestimoAtualizado = await emprestimoNegocio.atualizar(3, { id_situacao: 2 , dt_entrega: '25/12/2022 00:00:00'});
        console.log("Emprestimo Atualizado", emprestimoAtualizado);
    }
    catch(err){
        console.log("Erro", err);
    }

    //Caso de insucesso: Id inexistente
    try{
        const produtoAtualizado = await emprestimoNegocio.atualizar(100, { nome: 'produto4', preco: 25});
        console.log("Produto atualizado", produtoAtualizado);
    }
    catch(err){
        console.log("Erro", err);
    }

    //Caso de sucesso
    try{
        //Trazer id válido
        const produtoDeletado = await emprestimoNegocio.deletar(16);
        console.log("Produto deletado", produtoDeletado);
    } catch(err){
        console.log("Erro", err);
    }
    
    //Caso de insucesso: Id inexistente
    try{
        //Trazer id inválido
        const produtoDeletado = await emprestimoNegocio.deletar(100);
        console.log("Produto deletado", produtoDeletado);
    } catch(err){
        console.log("Erro", err);
    }
}

main();

