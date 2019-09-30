function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fano.value < 1919  || Number(fano.value.length) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/criancaM.png')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'img/jovemM.png')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','img/adulto.png')
            }else{
                //Idoso
                img.setAttribute('src','img/idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/criancaF.png')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src','img/jovemF.png')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','img/adulta.png')
            }else{
                //Idoso
                img.setAttribute('src','img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)     
    }
}