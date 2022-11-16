describe('coffeTech tela secador', () => {
    
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000/')
    })

    it('caso de teste: ir para deshboard clicando em um secador especifico teste nome 1', ()=>{
        cy.login('rodrigoaugusto','123456')
        cy.get('#cadastrar-secador-page-link').click()
        cy.get('#input-nome-secador').type('Secador Teste 1')
        cy.get('#input-modelo-secador').type('RTC TESTE 2X')
        cy.get('#select-localizacao-secador').type('Minas Gerais')
        cy.get('#button-criar-secador').click()
        cy.get('#informacao-secador').click()
        cy.get('h4').should('contain.text','Secador Teste 1')
        cy.get('#home-page-link').click()
        cy.get('#btn-delete').click()

    })
    it('caso de teste: ir para deshboard clicando em um secador especifico teste localizacao', ()=>{
      cy.login('rodrigoaugusto','123456')
      cy.get('#cadastrar-secador-page-link').click()
      cy.get('#input-nome-secador').type('Secador Teste 2')
      cy.get('#input-modelo-secador').type('RTC TESTE 2X')
      cy.get('#select-localizacao-secador').type('Minas Gerais')
      cy.get('#button-criar-secador').click()
      cy.get('#informacao-secador').click()
      cy.get('h4').should('contain.text','Minas Gerais')
      cy.get('#home-page-link').click()
      cy.get('#btn-delete').click()

    })
    
})