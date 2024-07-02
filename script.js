function imc(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('alt').value
    var peso = document.getElementById('peso').value
    var res = document.getElementById('res')
    if(nome.length == 0|| altura.length == 0|| peso.length == 0 ){
        window.alert('[ERRO]Preencha todos os campos!')
    }else{
        var medida = parseFloat(altura)
        var kg = parseFloat(peso)
        var imc = (kg/(medida*medida)).toFixed(2)
        if (imc < 18.5 ){
            res.innerHTML = `${nome} você tem o imc de ${imc}, portanto está abaixo do peso`
            //abaixo do peso
        }else if (imc < 25){
            res.innerHTML = `${nome} você tem o imc de ${imc}, portanto está com peso normal`
            //peso normal
        }else if(imc < 35){
            res.innerHTML = `${nome} você tem o imc de ${imc}, portanto está acima do peso`
            //acima do peso
        }else{
            res.innerHTML = `${nome} você tem o imc de ${imc}, portanto está com obesidade`
            //obesidade
        }
    }
}