var seta_sobre=document.querySelector('.seta_sobre');
var sobre_nav=document.querySelector('.sobre-nav');
var formacoes_nav=document.querySelector('.formacoes-nav')
sobre_nav.addEventListener('click' ,function () {
    location.reload()
    
})
formacoes_nav.addEventListener('click',function () {
    var section_sobre=document.querySelector('.sobre');
    var section_formacoes=document.querySelector('.formaçoes')
    var div_prox=document.querySelector('.div-prox')
    div_prox.classList.add('display-none')

    

    section_sobre.classList.add('display-none')

    section_formacoes.classList.remove('display-none')

    
})


seta_sobre.addEventListener('click',function () {
    var section_sobre=document.querySelector('.sobre');
    var section_formacoes=document.querySelector('.formaçoes')
    var div_prox=document.querySelector('.div-prox')

    section_sobre.classList.add('display-none')

    section_formacoes.classList.remove('display-none')
    div_prox.classList.add('display-none')

    
})

