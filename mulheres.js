const express = require("express"); // aqui iniciou o express
const router = express.Router(); //aqui configurando a primeira parte da rota
const cors = require('cors'); // trazendo o pacote cors, que permite o connsumo da API no front end

const conectaBancoDeDados = require("./bancoDeDados"); //ligando com o arquivo bancoDeDados
conectaBancoDeDados() //chamando a função que conecta o bando de dados

const Mulher = require('./mulherModel'); // abstração que diz a regra da criação e da conexão com o banco de dados em relação ao objeto mulher


const app = express(); // inicioando o app
app.use(express.json()); // para fazer funcionar o response, fez o body da request ser do tipo json
app.use(cors())
const porta = 3333; // criou a porta


//GET
async function mostraMulheres(request, response){
    try{
        const mulheresBancoDados = await Mulher.find()
        response.json(mulheresBancoDados)

    }catch (erro) {
        console.log(erro)
    }

}

//POST
async function criarMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)

    }catch (erro){
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response){
    try{
       const mulherEncontrada = await Mulher.findById(reuqest.params.id) 

       if (request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }

        if (request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao){
            mulherEncontrada = request.body.citacao
        }

        const mulherAtualizadaBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaBancoDeDados)

    }catch(erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response){
   try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: "Mulher deletada com sucesso!"})
   }catch(erro) {
        console.log(erro)
   }
   
}

app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET /mulheres
app.use(router.post('/mulheres', criarMulher)) // configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH /mulheres/:id 
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei a rota DELETE /mulheres/:id

//Porta
function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta);
};

app.listen(porta, mostraPorta); // servidor ouvindo a porta