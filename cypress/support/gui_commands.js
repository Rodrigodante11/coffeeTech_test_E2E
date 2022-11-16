Cypress.Commands.add('login',(nome, senha) =>{
    cy.get('#link-login').click()
    cy.get('#idEmailLogin').type(nome)
    cy.get('#idSenhaLogin').type(senha)
    cy.get('#btn-login').click()
})