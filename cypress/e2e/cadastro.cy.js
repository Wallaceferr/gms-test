/// <reference types="cypress"/>


describe('US-012 Funcionalidade: cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email= `fabio${Date.now()}@teste.com`
    cy.preencherCadastro('Fabio','Ferreira', email, '2232521542', 'Fa$io1234')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com campo inválido', () => {
    cy.preencherCadastro('Fabio20', 'Ferreira', 'fabio@teste.com.br', '2232521542', 'Fa$io1234')
    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})