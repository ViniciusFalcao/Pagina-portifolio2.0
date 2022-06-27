var seta_sobre=document.querySelector('.seta_sobre');
var sobre_nav=document.querySelector('.sobre-nav');
var formacoes_nav=document.querySelector('.formacoes-nav')
var projetos_nav=document.querySelector('.projetos-nav')
var contato_nav=document.querySelector('.contato-nav')
var seta_forma=document.querySelector('.seta-forma');
var section_formacoes=document.querySelector('.formaçoes')
var section_projetos=document.querySelector('.projetos')
var section_sobre=document.querySelector('.sobre');
var section_contato=document.querySelector('.contato')
var div_prox=document.querySelector('.div-prox');
contato_nav.addEventListener('click',function () {
    section_contato.scrollIntoView()
    
})


sobre_nav.addEventListener('click' ,function () {
      scrollTo(0,0)
    
})
formacoes_nav.addEventListener('click',function () {
   section_formacoes.scrollIntoView()

    
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
    card[index].addEventListener('mouseover',function(){
        var desc=document.querySelectorAll('.desc');
        var img_forma=document.querySelectorAll('.img_forma')
        desc[index].style.cssText='border:2px solid red;'
        img_forma[index].style.cssText='border:2px solid red; border-top:none;'
    })
    
}
for (let index = 0; index < card.length; index++) {
    card[index].addEventListener('mouseout',function(){
        var desc=document.querySelectorAll('.desc');
        var img_forma=document.querySelectorAll('.img_forma')
        desc[index].style.cssText='border:2px solid #222A99;'
        img_forma[index].style.cssText='border:2px solid #222A99; border-top:none;'
    })
    
    
}
var projetos_nav=document.querySelector('.projetos-nav');
projetos_nav.addEventListener('click',function () {
    section_projetos.scrollIntoView()
    
})


