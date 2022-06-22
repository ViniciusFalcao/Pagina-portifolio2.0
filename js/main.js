var seta_sobre=document.querySelector('.seta_sobre');
var sobre_nav=document.querySelector('.sobre-nav');
var formacoes_nav=document.querySelector('.formacoes-nav')
var seta_forma=document.querySelector('.seta-forma');
var section_formacoes=document.querySelector('.formaçoes')
var section_projetos=document.querySelector('.projetos')
var section_sobre=document.querySelector('.sobre');
var div_prox=document.querySelector('.div-prox');


sobre_nav.addEventListener('click' ,function () {
    location.reload()
    
})
formacoes_nav.addEventListener('click',function () {
    div_prox.classList.add('display-none')
    section_sobre.classList.add('display-none')
    section_formacoes.classList.remove('display-none')
    section_projetos.classList.add('display-none')

    
})


seta_sobre.addEventListener('click',function () {
    section_sobre.classList.add('display-none')
    section_formacoes.classList.remove('display-none')
    div_prox.classList.add('display-none')

    
})

seta_forma.addEventListener('click',function () {
    section_formacoes.classList.add('display-none')
    section_projetos.classList.remove('display-none')
})

