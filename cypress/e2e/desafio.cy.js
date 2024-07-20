/// <reference types="Cypress" />

describe('challenge test switch', () => {
  beforeEach(function(){
    cy.visit('https://qastage.buildbox.one/18/cadastro/') 
    cy.get('button[name="btn-enroll"]').click()
    
})

  it('Cadastro com dados válidos',() =>{
    cy.get('input[id="signup-personal-data-firstName"]').type('Daiane')
    cy.get('input[id="signup-personal-data-lastName"]').type('Catarina Martins')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('70919652646')
    cy.get('input[id="signup-personal-data-email"]').type('daiane-martins96@hlt.arq.br')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('daiane-martins96@hlt.arq.br')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('input[id="signup-address-cep"]').type('57062012')
    cy.get('input[id="signup-address-number"]').type('405')
    cy.get('input[id="signup-address-complement"]').type('perto do mercado')
    cy.get('button[id="signup_submit_button_3"]').click()
    cy.get('button[id="wide_window_button"]').should('be.visible')
    cy.get('button[id="wide_window_button"]').click()
    cy.get('input[id="user_login"]').type('daiane-martins96@hlt.arq.br')
    cy.get('input[id="user_pass"]').type('Renanteste2024')
    cy.get('input[id="wp-submit"]').click()
    cy.location('pathname').should('equal','/dashboard/')
  })

  it('Tentar cadastrar com CPF já existente',() =>{
    cy.get('input[id="signup-personal-data-firstName"]').type('Juan')
    cy.get('input[id="signup-personal-data-lastName"]').type('carlos')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('70919652646')
    cy.get('input[id="signup-personal-data-email"]').type('lorena5099@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('lorena5099@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })

  it('Tentar cadastrar com email já existente',() =>{
    cy.get('input[id="signup-personal-data-firstName"]').type('Caleb Martin')
    cy.get('input[id="signup-personal-data-lastName"]').type('Antonio Porto')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('lorena5066@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('lorena5066@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })

  /// não deveria deixar passar com menos de 4 caracteres, mas está passando na automação, então aqui tem um erro
  it('Tentar cadastrar com nome inválido',()=>{
    cy.get('input[id="signup-personal-data-firstName"]').type('re')
    cy.get('input[id="signup-personal-data-lastName"]').type('Barbosa ')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })
  
/// não deveria deixar passar com menos de 4 caracteres, mas está passando na automação, então aqui tem um erro
  it('Tentar cadastrar com sobrenome inválido',()=>{
    cy.get('input[id="signup-personal-data-firstName"]').type('antonio')
    cy.get('input[id="signup-personal-data-lastName"]').type('Ra')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })
  
  it('Tentar cadastrar com data de nascimento inválida',()=>{
    cy.get('input[id="signup-personal-data-firstName"]').type('jose')
    cy.get('input[id="signup-personal-data-lastName"]').type('Ramaa')
    cy.get('input[id="signup-personal-data-birthDate"]').type('00000000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })
  
  it('Tentar cadastrar com CPF inválido',()=>{
    cy.get('input[id="signup-personal-data-firstName"]').type('pedro')
    cy.get('input[id="signup-personal-data-lastName"]').type('Ramom')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('00000000000')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })

  it('Tentar cadastrar com email inválido',()=>{
    cy.get('input[id="signup-personal-data-firstName"]').type('matheus')
    cy.get('input[id="signup-personal-data-lastName"]').type('Ramaa')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796uorakcom')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796uorakcom')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('.input-error').should('be.visible')
  })

  it('Validar campo de confirmar email  com email diferente',()=>{
    cy.get('input[id="signup-personal-data-firstName"]').type('geraldo')
    cy.get('input[id="signup-personal-data-lastName"]').type('trind')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho0000@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('span').should('be.visible')
  })

  it('Validar campo de confirmação de senha com senha diferente',() =>{
    cy.get('input[id="signup-personal-data-firstName"]').type('Renato')
    cy.get('input[id="signup-personal-data-lastName"]').type('Barbosa')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
    cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796@uorak.com')
    cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
    cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2025')
    cy.get('button').contains('Selecione a proficiência...').click();
    cy.contains('Beginner').click();
    cy.get('input[id="signup-personal-data-lgpd"]').check()
    cy.get('button[id="signup_submit_button_1"]').click()
    cy.get('span').should('be.visible')
    })

    it('Tentar cadastrar sem marcar o checkbox de termos de uso',() =>{
      cy.get('input[id="signup-personal-data-firstName"]').type('Ramon')
      cy.get('input[id="signup-personal-data-lastName"]').type('silva')
      cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
      cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
      cy.get('input[id="signup-personal-data-email"]').type('stancho9796@uorak.com')
      cy.get('input[id="signup-personal-data-email-confirm"]').type('stancho9796@uorak.com')
      cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
      cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
      cy.get('button').contains('Selecione a proficiência...').click();
      cy.contains('Beginner').click();
     /// cy.get('input[id="signup-personal-data-lgpd"]').check()
      cy.get('button[id="signup_submit_button_1"]').click()
      cy.get('span').should('be.visible')
      })

      it('Validar se o campo CEP está trazendo os dados do endereço', ()=>{
        cy.get('input[id="signup-personal-data-firstName"]').type('Jorlann')
        cy.get('input[id="signup-personal-data-lastName"]').type('essencia')
        cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
        cy.get('input[id="signup-personal-data-cpf"]').type('55524210009')
        cy.get('input[id="signup-personal-data-email"]').type('lorena5068@uorak.com')
        cy.get('input[id="signup-personal-data-email-confirm"]').type('lorena5068@uorak.com')
        cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
        cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
        cy.get('button').contains('Selecione a proficiência...').click();
        cy.contains('Beginner').click();
        cy.get('input[id="signup-personal-data-lgpd"]').check()
        cy.get('button[id="signup_submit_button_1"]').click()
        cy.get('input[id="signup-address-cep"]').type('57062012')
        cy.get('input[id="signup-address-number"]').type('405')
        cy.get('input[id="signup-address-complement"]').type('perto do mercado')
        cy.get('[data-cy="input-signup-address-country"]').should('not.have.value')
        cy.get('input[id="signup-address-state"]').should('not.have.value')
        cy.get('input[id="signup-address-city"]').should('not.have.value')
      })

      it('Cadastrar usuário com nível de inglês "Intermediate"',() =>{
        cy.get('input[id="signup-personal-data-firstName"]').type('Yuri Cláudio')
        cy.get('input[id="signup-personal-data-lastName"]').type('Vitor Assis')
        cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
        cy.get('input[id="signup-personal-data-cpf"]').type('62125552493')
        cy.get('input[id="signup-personal-data-email"]').type('yuriclaudioassis@hawk.com.br')
        cy.get('input[id="signup-personal-data-email-confirm"]').type('yuriclaudioassis@hawk.com.br')
        cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
        cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
        cy.get('button').contains('Selecione a proficiência...').click();
        cy.contains('Intermediate').click();
        cy.get('input[id="signup-personal-data-lgpd"]').check()
        cy.get('button[id="signup_submit_button_1"]').click()
        cy.get('input[id="signup-address-cep"]').type('57062012')
        cy.get('input[id="signup-address-number"]').type('405')
        cy.get('input[id="signup-address-complement"]').type('perto do mercado')
        cy.get('button[id="signup_submit_button_3"]').click()
        cy.get('button[id="wide_window_button"]').should('be.visible')
        cy.get('button[id="wide_window_button"]').click()
        cy.get('input[id="user_login"]').type('yuriclaudioassis@hawk.com.br')
        cy.get('input[id="user_pass"]').type('Renanteste2024')
        cy.get('input[id="wp-submit"]').click()
        cy.location('pathname').should('equal','/dashboard/')
      })

      it('Cadastrar usuário com nível de inglês "Advanced"',() =>{
        cy.get('input[id="signup-personal-data-firstName"]').type('Sophia Elisa')
        cy.get('input[id="signup-personal-data-lastName"]').type('Rosa Figueiredo')
        cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
        cy.get('input[id="signup-personal-data-cpf"]').type('42994451808')
        cy.get('input[id="signup-personal-data-email"]').type('sophia_figueiredo@arcante.com.br')
        cy.get('input[id="signup-personal-data-email-confirm"]').type('sophia_figueiredo@arcante.com.br')
        cy.get('input[id="signup-personal-data-password"]').type('Renanteste2024')
        cy.get('input[id="signup-personal-data-password-confirm"]').type('Renanteste2024')
        cy.get('button').contains('Selecione a proficiência...').click();
        cy.contains('Advanced').click();
        cy.get('input[id="signup-personal-data-lgpd"]').check()
        cy.get('button[id="signup_submit_button_1"]').click()
        cy.get('input[id="signup-address-cep"]').type('57062012')
        cy.get('input[id="signup-address-number"]').type('405')
        cy.get('input[id="signup-address-complement"]').type('perto do mercado')
        cy.get('button[id="signup_submit_button_3"]').click()
        cy.get('button[id="wide_window_button"]').should('be.visible')
        cy.get('button[id="wide_window_button"]').click()
        cy.get('input[id="user_login"]').type('sophia_figueiredo@arcante.com.br')
        cy.get('input[id="user_pass"]').type('Renanteste2024')
        cy.get('input[id="wp-submit"]').click()
        cy.location('pathname').should('equal','/dashboard/')
      })
})