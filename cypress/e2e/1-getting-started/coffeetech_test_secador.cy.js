describe('coffeTech tela secador', () => {
    
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000/')
    })

    it('caso de teste: cadastrar secador', ()=>{
        cy.login('rodrigoaugusto','123456')
        cy.get('#cadastrar-secador-page-link').click()
        cy.get('#input-nome-secador').type('Secador teste 1')
        cy.get('#input-modelo-secador').type('RTC TESTE 2X')
        cy.get('#select-localizacao-secador').type('Minas Gerais')
        cy.get('#button-criar-secador').click()
        cy.get('#informacao-secador').should('contain.text','Secador Teste 1')
        cy.get('#btn-delete').click()

    })
    it('caso de teste: detalhar secador nome', ()=>{

      cy.login('rodrigoaugusto','123456')
      cy.get('#cadastrar-secador-page-link').click()
      cy.get('#input-nome-secador').type('Secador Teste 1')
      cy.get('#input-modelo-secador').type('RTC TESTE 2X')
      cy.get('#select-localizacao-secador').type('Minas Gerais')
      cy.get('#button-criar-secador').click()
      cy.get('#btn-detail').click()
      cy.get('#detalhe-nome-secador').should('contain.text','Secador Teste 1')
      cy.get('#home-page-link').click()
      cy.get('#btn-delete').click()
      
    })
  it('caso de teste: detalhar secador modelo', ()=>{
    cy.login('rodrigoaugusto','123456')
      cy.get('#cadastrar-secador-page-link').click()
      cy.get('#input-nome-secador').type('Secador Teste 1')
      cy.get('#input-modelo-secador').type('RTC TESTE 2X novo')
      cy.get('#select-localizacao-secador').type('Minas Gerais')
      cy.get('#button-criar-secador').click()
      cy.get('#btn-detail').click()
      cy.get('#detalhe-modelo-secador').should('contain.text','RTC TESTE 2X novo')
      cy.get('#home-page-link').click()
      cy.get('#btn-delete').click()
    
    
  })
  it('caso de teste: detalhar localizacao', ()=>{
    cy.login('rodrigoaugusto','123456')
      cy.get('#cadastrar-secador-page-link').click()
      cy.get('#input-nome-secador').type('Secador Teste 1')
      cy.get('#input-modelo-secador').type('RTC TESTE 2X novo')
      cy.get('#select-localizacao-secador').type('Minas Gerais')
      cy.get('#button-criar-secador').click()
      cy.get('#btn-detail').click()
      cy.get('#detalhe-localizacao-secador').should('contain.text','Minas Gerais')
      cy.get('#home-page-link').click()
      cy.get('#btn-delete').click()
    
  })
  it('caso de teste: detalhar criado por', ()=>{
    cy.login('rodrigoaugusto','123456')
      cy.get('#cadastrar-secador-page-link').click()
      cy.get('#input-nome-secador').type('Secador Teste 1')
      cy.get('#input-modelo-secador').type('RTC TESTE 2X novo')
      cy.get('#select-localizacao-secador').type('Minas Gerais')
      cy.get('#button-criar-secador').click()
      cy.get('#btn-detail').click()
      cy.get('#detalhe-adicionado-por-secador').should('contain.text','Rodrigoaugusto')
      cy.get('#home-page-link').click()
      cy.get('#btn-delete').click()
    
  })
    // it('caso de teste: cadastrar secador', ()=>{
    //     cy.login('rodrigoaugusto','123456')
    //     var randomico = cy.getRandom(10000)
        
        

    // })
})