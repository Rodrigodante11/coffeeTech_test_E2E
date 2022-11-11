describe('coffeTech busca sem usuario logado', () => {
    
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000/')
    })

    it('caso de teste: fazer login', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('#idEmailLogin').type('rodrigoaugusto')
        cy.get('#idSenhaLogin').type('123456')
        cy.get('.d-grid > .btn').click()
        cy.get(':nth-child(2) > h5 > .nav-link').click()
        cy.get(':nth-child(1) > label').should('contain.text','Nome Secador')
        cy.get(':nth-child(2) > label').should('contain.text','Modelo Secadore')
        cy.get('.form-group > label').should('contain.text','Selecione a localização')
        

    })
})