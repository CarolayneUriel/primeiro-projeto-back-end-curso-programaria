const express = require("express");
const router = express.Router()

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: "Simara Conceição",
        imagem:"https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/0/1563116727332?e=1707955200&v=beta&t=AI4B4iBICt6IcOHStdjeP5Z2Fw2_uw7k_2p-Y378pIw",
        minibio: "Desenvolvedora e instrutora"
    },

    {
        nome: "Iana Chan",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_200_200/0/1686007268307?e=1709164800&v=beta&t=Y-nUTIW3MdcmMhs8Clv5FfKj_HLdx6xldT9jS-4N5EQ",
        minibio: "Fundadora da programaria"
    },

    {
        nome: "Nina da Hora",
        imagem: "https://media.licdn.com/dms/image/D4D22AQE5lt-6AwvU9A/feedshare-shrink_1280/0/1680359777519?e=1706140800&v=beta&t=12InAzU4YlE9bt0O-S7fIKpPYnSnph4tMrUi4FFbWE0",
        minibio: "Hacker antiracismo"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}
function mostraPorta(){
    console.log("Servidos criado e rodando na porta", porta);
};

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);