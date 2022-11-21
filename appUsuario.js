const usuarioNegocio = require('./negocio/usuario_negocio')


async function main() {
      
    const listaUsuario = await usuarioNegocio.listar();
    console.log("Lista de Usuários",listaUsuario);
 
    try{ 
        const usuaior_1 = await usuarioNegocio.buscarPorId(1);
        console.log("Usuário 1", usuario_1);
    } catch (err) {                                                                           
        console.log("Erro", err);
    }

    try{ 
        const usuario_2 = await usuarioNegocio.buscarPorId(2);
        console.log("Empretimo 2 = ", usuario_2);
    } catch (err) {
        console.log("Erro", err);
    }

    //Inesistente  
    try{
        const usuario_3 = await usuarioNegocio.buscarPorNome('Rafael');
        console.log("usuario 3 = 'Rafael'", usuario_3);
    } catch(err) {
        console.log("Erro", err);
    }

    try{
        const usuario_4 = await usuarioNegocio.buscarPorNome('Joana');
        console.log("usuario 4 = 'Joana'", usuario_4);
    } catch(err) {
        console.log("Erro", err);
    }
   /*
    //Caso de sucesso
    try{
        const usuarioAtualizado = await usuarioNegocio.atualizar(2, { id_situacao: '2', dt_entrega: '25/12/2022 00:00:01'});
        console.log("usuario Atualizado", usuarioAtualizado);
    }
    catch(err){
        console.log("Erro", err);
    }

    //Caso de insucesso: Parametro preco é string
    try{
        const usuarioAtualizado = await usuarioNegocio.atualizar(3, { id_situacao: 2 , dt_entrega: '25/12/2022 00:00:00'});
        console.log("usuario Atualizado", usuarioAtualizado);
    }
    catch(err){
        console.log("Erro", err);
    }

    //Caso de insucesso: Id inexistente
    try{
        const produtoAtualizado = await usuarioNegocio.atualizar(100, { nome: 'produto4', preco: 25});
        console.log("Produto atualizado", produtoAtualizado);
    }
    catch(err){
        console.log("Erro", err);
    }

    //Caso de sucesso
    try{
        //Trazer id válido
        const produtoDeletado = await usuarioNegocio.deletar(16);
        console.log("Produto deletado", produtoDeletado);
    } catch(err){
        console.log("Erro", err);
    }
    
    //Caso de insucesso: Id inexistente
    try{
        //Trazer id inválido
        const produtoDeletado = await usuarioNegocio.deletar(100);
        console.log("Produto deletado", produtoDeletado);
    } catch(err){
        console.log("Erro", err);
    }
    */
}

main();

