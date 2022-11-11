describe('coffeTech busca sem usuario logado', () => {
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000/')
    })

    it('caso de teste: mensagem para usuario nao logado', ()=>{
        cy.get('.nav-link > :nth-child(1)').should('contain.text','Olá, faça seu login')
        
    })
    it('caso de teste: usuario nao logado click tela Home', ()=>{
        cy.get('h5.row').should('contain.text','Desculpe')
        
    })
    it('caso de teste: usuario nao logado click tela Home', ()=>{
        cy.get(':nth-child(1) > h5 > .nav-link').click()
        cy.get('.text-danger').should('contain.text','Voce não Tem Acesso aos Secadores cadastrados Ainda')
        
    })
    it('caso de teste: usuario nao logado click tela Cadastrar Secador', ()=>{
        cy.get(':nth-child(2) > h5 > .nav-link').click()
        cy.get('.text-danger').should('contain.text','Voce não Tem Acesso ao cadastrados de Secadores Ainda')
        
    })
    it('caso de teste: usuario nao logado click para logar', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.card-body > form > :nth-child(2)').should('contain.text','Usuário ou Email :')
        
    })
})