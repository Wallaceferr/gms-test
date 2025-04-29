/// <reference types="cypress"/> 


describe('US-012Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://192.168.1.137:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Ferreira')
    cy.get('#signup-email').type('fabio6@teste.com')
    cy.get('#signup-phone').type('2224125235')
    cy.get('#signup-password').type('W@lla1c1')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})