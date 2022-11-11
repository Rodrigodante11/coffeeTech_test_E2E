Cypress.Commands.add('login',(nome, senha) =>{
    cy.get('.nav-link > :nth-child(1)').click()
    cy.get('#idEmailLogin').type(nome)
    cy.get('#idSenhaLogin').type(senha)
    cy.get('.d-grid > .btn').click()
})