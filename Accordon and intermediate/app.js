// Accordion / Intermediate

/**
 * requrements
 * document.getElementByClass()
 * addEventListerner()
 * for loop
 * this
 * classList.toggle()
 */


// Variable
const accordion = document.getElementsByClassName('content-container')
console.log(accordion)

for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active')
    })
}



