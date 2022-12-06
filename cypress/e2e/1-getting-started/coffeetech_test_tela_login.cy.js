describe('coffeTech Tela login', () => {
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000/')
    })

    it('caso de teste: tela esqueceu sua senha', ()=>{
        cy.get('#link-login').click()
        cy.get('#link-esqueceu-sua-senha').click()
        cy.get('.text-success').should('contain.text','Esqueceu sua senha?')
        
    })
    // it('caso de teste: enviar email tela reset senha', ()=>{
    //     cy.get('#link-login').click()
    //     cy.get('.text-success').click()
    //     cy.get('#id_email').type('rodrigoteste45781245@gmail.com')
    //     cy.get('.btn-success').click()
       
    //})
    it('caso de teste: voltar tela login apos clicar em esqueceu sua senha', ()=>{
        cy.get('#link-login').click()
        cy.get('#link-esqueceu-sua-senha').click()
        cy.get('#btn-voltar-tela-login').click()
        cy.get('#idEmailLogin').should('contain.text','')
        
    })
    it('caso de teste: campos para criar conta', ()=>{
        cy.get('#link-login').click()
        cy.get('#btn-criar-conta-tela-login').click()
        cy.get('#label-criar-conta-nome').should('contain.text','Nome')
        cy.get('#label-criar-conta-sobrenome').should('contain.text','Sobrenome')
        cy.get('#label-criar-conta-email').should('contain.text','Endereço de email')
        cy.get('#label-criar-conta-senha').should('contain.text','Senha')
        cy.get('#label-criar-conta-segunda-senha').should('contain.text','Confirmar senha')
        

    })
    it('caso de teste: tentar criar usuario com email repetido', ()=>{
        cy.get('#link-login').click()
        cy.get('#btn-criar-conta-tela-login').click()
        cy.get('#id_first_name').type('Rodrigo')
        cy.get('#id_last_name').type('de Oliveira')
        cy.get('#id_email').type('rodrigoaugusto839@gmail.com')
        cy.get('#usr_email > label').should('contain.text','Email já se encontra cadastrado')
    
    })

    it('caso de teste: tentar criar usuario com email repetido, regex impede', ()=>{
        cy.get('#link-login').click()
        cy.get('.my-2 > .btn').click()
        cy.get('#id_first_name').type('Rodrigo')
        cy.get('#id_last_name').type('de Oliveira')
        cy.get('#id_email').type('rodrigoaugusto')
        cy.get('#usr_email > label').should('contain.text','Email inválido')
    
    })
    it('caso de teste: tentar criar usuario com senhas de confirmação diferente da senha', ()=>{
        cy.get('#link-login').click()
        cy.get('.my-2 > .btn').click()
        cy.get('#id_password').type('123456')
        cy.get('#pwd_confirm').type('12345')
        cy.get('#error_pwd > label').should('contain.text','As senhas não coincidem')
    
    })
    it('caso de teste: fazer login com senha errada', ()=>{
        cy.login('rodrigoaugusto','11111111')
        cy.get('.alert').should('contain.text','Username or password incorect')

    })
    it('caso de teste: fazer login com usuario inexisteste', ()=>{
        var randomico = cy.getRandom(10000)
        cy.login('test'+randomico,'123456')
        cy.get('.alert').should('contain.text','Username or password incorect')

    })
    it('caso de teste: login com o google', ()=>{
        cy.get('#link-login').click()
        cy.get(':nth-child(3) > .btn > .fa-brands').click()
        cy.get('.text-primary').should('contain.text','Google')

    })

    it('caso de teste: login com o GitHub', ()=>{
        cy.get('#link-login').click()
        cy.get(':nth-child(2) > .btn > .fa-brands').click()
        cy.get('.text-primary').should('contain.text','GitHub')

    })
    it('caso de teste: fazer login', ()=>{
        cy.login('rodrigoaugusto','123456')
        cy.get('.text-center').should('contain.text','Olá Rodrigoaugusto')

    })
    it('caso de teste: opcao de deslogar voltando tela login botao sim', ()=>{
        cy.login('rodrigoaugusto','123456')
        cy.get('#link-login-usuario-ja-logado').click()
        cy.get('#btn-sim-deslogar').click()
        cy.get('#idEmailLogin').should('contain.text','')

    })
    it('caso de teste: opcao de deslogar voltando tela Home botao Nao', ()=>{
        cy.login('rodrigoaugusto','123456')
        cy.get('#link-login-usuario-ja-logado').click()
        cy.get('#btn-nao-deslogar').click()
        cy.get('.text-center').should('contain.text','Rodrigoaugusto')
        

    })


    
})