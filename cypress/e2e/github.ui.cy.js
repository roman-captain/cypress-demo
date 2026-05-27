describe('GitHub UI Navigation - Happy Paths', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate to the Sign In page', () => {
        cy.get('a[href="/login"]')
            .not('.js-prevent-focus-on-mobile-nav')
            .first()
            .click();
        cy.contains('h1', 'Sign in to GitHub').should('be.visible');
    });

    it('should navigate to the Pricing page', () => {
        cy.get('a[href="/pricing"]')
            .not('.js-prevent-focus-on-mobile-nav')
            .first()
            .click();
        cy.title().should('include', 'Pricing');
    });

    it('should navigate to the Sign Up form', () => {
        cy.get('a[href*="/signup"]')
            .not('.js-prevent-focus-on-mobile-nav')
            .first()
            .click();
        cy.contains('Create your free account').should('be.visible');
    });
});
