/// <reference types="Cypress" />

describe('challenge test switch', () => {
  beforeEach(function(){
    cy.visit('https://qastage.buildbox.one/18/cadastro/') 
    cy.get('button[name="btn-enroll"]').click()
    
})

  it.only('Cadastro com dados válidos',() =>{
    cy.get('input[id="signup-personal-data-firstName"]').type('Renan')
    cy.get('input[id="signup-personal-data-lastName"]').type('Ramos Barbosa')
    cy.get('input[id="signup-personal-data-birthDate"]').type('01012000')
    cy.get('input[id="signup-personal-data-cpf"]').type('62685367039')
    cy.get('input[id="signup-personal-data-email"]').type('lorena5066@uorak.com')
    cy.get('input[id="signup-personal-data-email-confirm"]').type('lorena5066@uorak.com')
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
    cy.get('input[id="user_login"]').type('lorena5066@uorak.com')
    cy.get('input[id="user_pass"]').type('Renanteste2024')
    cy.get('input[id="wp-submit"]').click()
    cy.location('pathname').should('equal','/dashboard/')
    
  })


 
})