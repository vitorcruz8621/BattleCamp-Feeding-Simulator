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
    
    let especiais = {
        "especiaisPotentes" : especial_potente.value * 64000 * 2,
        "especiaisCarregados" : especial_carregado.value  * 64000 * 3,
        "especiaisEnergizados" : especial_energizado.value * 64000 * 5
    }
    
    let especiaisElemento = especial_elemento.value;
    let feedingBooster = feeding_booster.value;
    valueOfSpecials(especiais)

    console.log(especiais)

    let necessaryExperience = returnNecessaryExperience();
    let necessaryFeeding = returnNecessaryFeeding(necessaryExperience);

    if(necessaryFeeding <= 0 ){
        //alert("Monstro maximizado com excesso de " + (-1 * necessaryFeeding));
        console.log("Monstro maximizado com excesso de " + (-1 * necessaryFeeding));
    } else {
        //alert("Monstro não foi maximizado ainda. Faltou " + necessaryFeeding);
        console.log("Monstro não foi maximizado ainda. Faltou " + necessaryFeeding);
    }


    function returnNecessaryFeeding(necessaryExperience){
        for (let especial in especiais){
            necessaryExperience -= especiais[especial]
        }
        return necessaryExperience;
    }
    
    function returnNecessaryExperience(){
        if( bcMobs.hasOwnProperty(tipoMonstro) ){
            let auxBcMob = bcMobs[tipoMonstro];

            if(auxBcMob.hasOwnProperty(evolucao)){                
                return auxBcMob[evolucao]                
            } else return 0;
        } else return 0;
    }

    function valueOfSpecials(especiais){
        //if(feedingBooster != false && especiaisElemento != false) {
            let increase = 1;

            if(feedingBooster == true)
                increase++;
            if(especiaisElemento == true)
                increase *= 1.3
            
            for (let especial in especiais){
                especiais[especial] *= increase;
            }
        //}        
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