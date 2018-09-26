const bcMobs = mobsCatalog()

const botao = document.getElementById('botao');

const form = document.getElementById('formulario');

botao.addEventListener('click', (e)=>{
    readFormInformation()
    e.preventDefault();
});

function readFormInformation() {
    
    let tipoMonstro = tipo_monstro.value;
    let evolucao = evolucao_monstro.value;
    let tipoEspecial = tipo_especial.value;
    let tipoEspecialResp;
    let elementoEspecial = (elemento_especial.value == "true");
    let elementoEspecialResp = elementoEspecial ? "do mesmo elemento" : "de elementos distintos";
    let feedingBooster = (feeding_booster.value == "true");
    let feedingBoosterResp = feedingBooster ? " usando " : " sem usar ";
    
    switch(tipoEspecial) {
        case "2":
            tipoEspecialResp = "potente(s)";
            break
        case "3":
            tipoEspecialResp = "carregado(s)";
            break
        case "5":
            tipoEspecialResp = "energizado(s)";
            break;
        default:
            tipoEspecialResp = "ERRO";
            break;
    }

    let jsonResp = returnNecessaryFeeding();
    
    alert("Para maximizar um montro do tipo " + tipoMonstro + " " + evolucao + ", será necessário " + 
    jsonResp.especiais + " especial(is) " + tipoEspecialResp + " " + elementoEspecialResp + feedingBoosterResp + 
    " um aditivo de nutrição.\n" + "Houve excesso de " + jsonResp.xpExcedido + " Xp");

    function returnNecessaryFeeding(){
        if( bcMobs.hasOwnProperty(tipoMonstro) ){
            let copyBcMObs = bcMobs[tipoMonstro];

            if(copyBcMObs.hasOwnProperty(evolucao)){
                copyBcMObs = copyBcMObs[evolucao];

                let i = copyBcMObs;
                
                let specialValueXp = 40 * 800 * tipoEspecial, cont = 0;
                if(elementoEspecial == true)
                    specialValueXp *= 1.3;
                if( feedingBooster == true)
                    specialValueXp *= 2;
                
                console.log("Expeciencia do especial = " + specialValueXp)
                for (; i > 0; i -= specialValueXp, cont++){
                    console.log("Expeciencia restante = " + i )
                    console.log("Especiais usados = " + (cont+1))
                }
                console.log(`${i}\n--------------------------------`)


                //returnNecessaryFeedingNeeded = cont;
                return {
                    "especiais" : cont,
                    "xpExcedido" : i*(-1)};
                
            } else return 0;
        } else return 0;
    }
}

function mobsCatalog() {
    return {
        "uncommon" : {
            "unevolved" : 16600
        },
        "special" : {
            "unevolved" : 96393
        },
        "rare" : {
            "unevolved" : 192780,
            "evo" : 500000
        },  
        "super" : {
            "unevolved" : 294750,
            "evo" : 769484,
            "sevo" : 975000
        },  
        "ultra" : {
            "unevolved" : 396720,
            "evo" : 964728,
            "sevo" : 1200000
        },  
        "epic" : {
            "unevolved" : 650000,
            "evo" : 1300000,
            "sevo" : 1600000
        }
    }
};