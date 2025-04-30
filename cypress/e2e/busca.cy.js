/// <reference types="cypress"/>


describe('US-001 Funcionalidade: Busca de Filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type('Interstellar')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain','Interstellaraes')
    })

    it('Deve buscar filme com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) =>{
            cy.get('#search-input').type(filmes[1].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain',filmes[1].titulo)
        })
    })

    it('Deve buscar filme com sucesso de uma lista inteira', () => {
        cy.fixture('filmes').each((filmes) =>{
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain',filmes.titulo)
        })
    })

})