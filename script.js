const button = document.getElementById('button');
const name = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');

const getTex = (imc) =>{
    if(imc > 40) return 'Obesidade grau III'
    if(imc > 35) return 'Obesidade grau II'
    if(imc > 30) return 'Obesidade grau I'
    if(imc > 25) return 'levemente acima do peso'
    if(imc > 18.5) return 'Peso ideal'
    return 'Abaixo do peso'
}

const imcCalk = () =>{
    const valorimc = (+peso.value / (+altura.value * +altura.value)).toFixed(2)
    resultado.textContent = `${'IMC'} -(${getTex(valorimc)})`
}

button.addEventListener('click',imcCalk)
