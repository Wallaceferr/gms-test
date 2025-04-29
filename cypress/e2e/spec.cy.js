/// <reference types="cypress"/> 


describe('US-012Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://192.168.1.137:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Ferreira')
    cy.get('#signup-email').type('fabio7@teste.com')
    cy.get('#signup-phone').type('2224125235')
    cy.get('#signup-password').type('Fab$io123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})

describe('US-012Funcionalidade: cadastro de membros', () => {
  it('Deve fazer a validação no formato do e-mail', () => {
    cy.visit('http://192.168.1.137:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Ferreira')
    cy.get('#signup-email').type('fabiowteste.com')
    cy.get('#signup-phone').type('2224125235')
    cy.get('#signup-password').type('Fab$io123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','E-mail deve ser um email válido')
  })
})

describe('US-012Funcionalidade: cadastro de membros', () => {
  it('Deve fazer a validação do envio sem preencher campos obrigatórios(email)', () => {
    cy.visit('http://192.168.1.137:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Ferreira')
    cy.get('#signup-phone').type('2224125235')
    cy.get('#signup-password').type('Fab$io123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','E-mail não pode estar vazio')
  })
})

describe('US-012Funcionalidade: cadastro de membros', () => {
  it('Deve fazer a validação do envio sem preencher campos obrigatórios(Sobrenome)', () => {
    cy.visit('http://192.168.1.137:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-email').type('fabiowteste.com')
    cy.get('#signup-phone').type('2224125235')
    cy.get('#signup-password').type('Fab$io123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Sobrenome não pode estar vazio')
  })
})

describe('US-012Funcionalidade: cadastro de membros', () => {
  it('Deve fazer a validação de senha forte', () => {
    cy.visit('http://192.168.1.137:8080')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Ferreira')
    cy.get('#signup-email').type('fabio7@teste.com')
    cy.get('#signup-phone').type('2224125235')
    cy.get('#signup-password').type('senha123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})