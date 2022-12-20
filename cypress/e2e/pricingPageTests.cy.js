describe('Checks price changes, currency, lenght, custom plan', () => {

    beforeEach('Load the page and accept', () => {
        cy.visit('https://www.lodgify.com/pricing');
        cy.get('#onetrust-accept-btn-handler').click();

    })

    it('Checks that the price changes accordingly', () => {
        cy.get('#scroll-prop-plan').clear().type('50');
        cy.get('.total-sum').contains('64');
        cy.get('.total-sum').contains('375');
        cy.get('.total-sum').contains('525');
    })

    // NOTE if tested on localhost - there is a bug when Euro selected
    it('Checks that currency changes to EU then to GBP then to USD', () => {
        cy.get('.price-currency-select').select('eur');
        cy.get('.currency').contains('€')
        cy.get('.price-currency-select').select('gbp');
        cy.get('.currency').contains('£')
        cy.get('.price-currency-select').select('usd');
        cy.get('.currency').contains('$')
    })


    it('Checks that monthly and 2 years options work and price changes accordingly', () => {
        cy.get('.btn').contains('Monthly').click();
        cy.get('.total-sum').contains('46')
        cy.get('.btn').contains('Two Years').click();
        cy.get('.total-sum').contains('30')
        cy.get('.btn').contains('Yearly').click();
        cy.get('.total-sum').contains('32')
    })

    it('Checks that custom plan option appears', () => {
        cy.get('#scroll-prop-plan').clear().type('200');
        cy.get('.panel-body').contains('Contact us to build a custom plan')
    })


})