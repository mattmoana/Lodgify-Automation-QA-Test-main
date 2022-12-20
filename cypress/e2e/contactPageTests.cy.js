describe('Check contact page and validate fields and errors', () => {

    beforeEach('always on the pricing page', () => {
        cy.visit('http://127.0.0.1:5500/public/contact.html');
        // cy.get('#onetrust-accept-btn-handler').click();
    })

    it('Checks that errors are displayed required fields are not filled', () => {


        cy.get('.button').contains('Send').click();
        cy.get('.pointing').contains('Name is mandatory')
        cy.get('.pointing').contains('Email is mandatory')
        cy.get('.pointing').contains('Comment is mandatory')
        cy.get('.pointing').contains('Phone is mandatory')

    });
})