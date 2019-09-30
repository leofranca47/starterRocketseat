var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "centro",
    cidade: "São Paulo",
    uf: "SP"
}

// console.log(`o usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}`)

var numPares = [];
function pares(x, y){
    
   for(var i = x; i <= y; i++){
        if(i % 2 == 0){
            numPares.push(i) 
        }
   }
    
}
pares(32, 321)
// console.log(numPares)


function temHabilidade(skills){
for(var i = 0; i < skills.length; i++ ){

    if(skills.indexOf("Javascript") ){
        return true
    }else{
        return false;
    }
}
}

var skills = ["ReactJS", "React Native","Javascript" ]
// console.log(temHabilidade(skills))

function experiencia(anos){
    if(anos <= 1){
        console.log("Iniciante")
    }else if(anos <= 3){
        console.log("Intermediário")
    }else if(anos <=6){
        console.log("Avançado")
    }else if(anos >= 7){
        console.log("Jedi Master")
    }
}

var anosEstudo = 7
// experiencia(anosEstudo)


var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   for(var ler of usuarios){
    console.log(`O ${ler.nome} possui as habilidades: ${ler.habilidades[0]}, ${ler.habilidades[1]}, ${ler.habilidades[2]}`)
   }
