const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraPorta(){
    console.log("Servidos criado e rodando na porta", porta);
};

function mostraMulher(request, response){
    response.json({
        nome: "Simara Conceição",
        imagem:"https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/0/1563116727332?e=1707955200&v=beta&t=AI4B4iBICt6IcOHStdjeP5Z2Fw2_uw7k_2p-Y378pIw",
        minibio: "Desenvolvedora e instrutora"
    })
};

app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);