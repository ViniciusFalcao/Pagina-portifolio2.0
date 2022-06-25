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

var imagens_proj=document.querySelectorAll('.img-projetos')
var info_projetos=document.querySelectorAll('.info_projetos')
console.log(imagens_proj)

for (let index = 0; index < imagens_proj.length; index++) {
    imagens_proj[index].addEventListener('click' ,function () {
        console.log(this)
        var img=this;
        img.classList.add('display-none');
        info_projetos[index].classList.remove('display-none')

        

        
    })
   
    
    
}
for (let index = 0; index < info_projetos.length; index++) {
    info_projetos[index].addEventListener('click',function () {        
        
        info_projetos[index].classList.add('display-none');
        imagens_proj[index].classList.remove('display-none')   
             
    })
    
}

var card=document.querySelectorAll('.card');

for (let index = 0; index < card.length; index++) {
    card.addEventListener('mouseover',function(){
        this.style.cssText='border:solid 2px orangered'

    })
    
}

