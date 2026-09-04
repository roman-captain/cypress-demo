describe('GitHub UI Navigation - Happy Paths', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate to the Sign In page', () => {
        cy.get('a[href="/login"][class*="hiddenBelowLg"]').click();
        cy.contains('h1', 'Sign in to GitHub').should('be.visible');
    });

    it('should navigate to the Pricing page', () => {
        cy.get('a[href="/pricing"]')
            .not('.js-prevent-focus-on-mobile-nav')
            .first()
            .click();
        cy.title().should('include', 'Pricing');
    });

    // GitHub serves an Octocaptcha challenge to automated visitors on the
    // signup flow, so page content (form or captcha) is not deterministic.
    // This test covers the entry point only: the CTA routes to /signup.
    it('should navigate to the Sign Up form', () => {
        cy.get('a[href*="/signup"]')
            .not('.js-prevent-focus-on-mobile-nav')
            .first()
            .click();
        cy.url().should('include', '/signup');
    });
});
