describe('Petstore API', () => {
    const BASE_URL = Cypress.env('BASE_URL');

    it('GET /pet/findByStatus - should validate pet object structure', () => {
        cy.request({
            method: 'GET',
            url: `${BASE_URL}/pet/findByStatus`,
            qs: { status: 'available' },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').and.not.be.empty;

            const firstPet = response.body[0];
            expect(firstPet).to.include.keys('id', 'photoUrls', 'tags', 'status');
            expect(firstPet.id).to.be.a('number');
            expect(firstPet.status).to.be.a('string');
            if (firstPet.name) expect(firstPet.name).to.be.a('string');
            if (firstPet.category) expect(firstPet.category).to.be.an('object');
        });
    });

    it('POST & GET /pet - should create a new pet and verify it exists', () => {
        const uniqueId = Date.now();
        const newPet = {
            id: uniqueId,
            name: 'CypressTester',
            status: 'available',
        };

        cy.request('POST', `${BASE_URL}/pet`, newPet).then((postResponse) => {
            expect(postResponse.status).to.eq(200);
            expect(postResponse.body.name).to.eq('CypressTester');

            cy.request('GET', `${BASE_URL}/pet/${uniqueId}`).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
                expect(getResponse.body.id).to.eq(uniqueId);
            });
        });
    });

    it('GET /store/inventory - should return inventory with valid schema', () => {
        cy.request('GET', `${BASE_URL}/store/inventory`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('available');
        });
    });
});
