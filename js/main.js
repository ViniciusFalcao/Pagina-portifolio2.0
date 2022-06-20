var seta_sobre=document.querySelector('.seta_sobre');


seta_sobre.addEventListener('click',function () {
    var section_sobre=document.querySelector('.sobre');
    var section_formacoes=document.querySelector('.formaçoes')

    section_sobre.classList.add('display-none')

    section_formacoes.classList.remove('display-none')
    
})

