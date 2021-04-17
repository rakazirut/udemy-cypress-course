/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('localhost:3000');

});

it('Checks text of todo item', () => {

  cy
    .get('.todo')
    .then(item => {
      expect(item).to.contain('buy milk')
    })

});

it('Checks texts of all todo items', () => {

  cy
    .get('.todo')
    .then(todos => {
      expect(todos[0]).to.contain('buy milk')
      expect(todos[1]).to.contain('wash dishes')
      expect(todos[2]).to.contain('create todos list')
    })

});

it('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.todo')
    .should('have.length', 2)
    .eq(0)
    .should('contain.text', 'wash dishes');

});

it.only('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo')
    .should(todos => {
      expect(todos[0]).to.contain.text('create todos list');
    })

});