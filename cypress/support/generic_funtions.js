
Cypress.Commands.add('getRandom',(max) =>{
    return Math.floor(Math.random() * max + 1)
})