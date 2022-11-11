describe('coffeTech busca sem usuario logado', () => {
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000/')
    })

    it('caso de teste: tela esqueceu sua senha', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.text-success').click()
        cy.get('.text-success').should('contain.text','Esqueceu sua senha?')
        
    })
    // it('caso de teste: enviar email tela reset senha', ()=>{
    //     cy.get('.nav-link > :nth-child(1)').click()
    //     cy.get('.text-success').click()
    //     cy.get('#id_email').type('rodrigoteste45781245@gmail.com')
    //     cy.get('.btn-success').click()
       
    //})
    it('caso de teste: voltar tela login apos clicar em esqueceu sua senha', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.text-success').click()
        cy.get('.btn-danger').click()
        cy.get('.card-body > form > :nth-child(2)').should('contain.text','Usuário ou Email :')
        
    })
    it('caso de teste: campos para criar conta', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.my-2 > .btn').click()
        cy.get(':nth-child(1) > .form-label').should('contain.text','Nome')
        cy.get(':nth-child(2) > .form-label').should('contain.text','Sobrenome')
        cy.get(':nth-child(4) > .form-label').should('contain.text','Endereço de email')
        cy.get(':nth-child(6) > .form-label').should('contain.text','Senha')
        cy.get(':nth-child(7) > .form-label').should('contain.text','Confirmar senha')
        // Endereço de email
        
        
    })
    it('caso de teste: tentar criar usuario com email repetido', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.my-2 > .btn').click()
        cy.get('#id_first_name').type('Rodrigo')
        cy.get('#id_last_name').type('de Oliveira')
        cy.get('#id_email').type('rodrigoaugusto839@gmail.com')
        cy.get('#usr_email > label').should('contain.text','Email já se encontra cadastrado')
    
    })

    it('caso de teste: tentar criar usuario com email repetido, regex inpede', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.my-2 > .btn').click()
        cy.get('#id_first_name').type('Rodrigo')
        cy.get('#id_last_name').type('de Oliveira')
        cy.get('#id_email').type('rodrigoaugusto')
        cy.get('#usr_email > label').should('contain.text','Email inválido')
    
    })
    it('caso de teste: tentar criar usuario com senhas de onfirmação diferente da senha', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('.my-2 > .btn').click()
        cy.get('#id_password').type('123456')
        cy.get('#pwd_confirm').type('12345')
        cy.get('#error_pwd > label').should('contain.text','As senhas não coincidem')
    
    })
    it('caso de teste: fazer login com senha errada', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('#idEmailLogin').type('rodrigoaugusto')
        cy.get('#idSenhaLogin').type('11111111')
        cy.get('.d-grid > .btn').click()
        cy.get('.alert').should('contain.text','Username or password incorect')

    })
    it('caso de teste: fazer login com usuario inexisteste errada', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('#idEmailLogin').type('rodrigoaugusto45784test')
        cy.get('#idSenhaLogin').type('123456')
        cy.get('.d-grid > .btn').click()
        cy.get('.alert').should('contain.text','Username or password incorect')

    })
    it('caso de teste: login com o google', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get(':nth-child(3) > .btn > .fa-brands').click()
        cy.get('.text-primary').should('contain.text','Google')

    })

    it('caso de teste: login com o GitHub', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get(':nth-child(2) > .btn > .fa-brands').click()
        cy.get('.text-primary').should('contain.text','GitHub')

    })
    it('caso de teste: fazer login', ()=>{
        cy.get('.nav-link > :nth-child(1)').click()
        cy.get('#idEmailLogin').type('rodrigoaugusto')
        cy.get('#idSenhaLogin').type('123456')
        cy.get('.d-grid > .btn').click()

        cy.get('.text-center').should('contain.text','Olá Rodrigoaugusto')

    })

    
})