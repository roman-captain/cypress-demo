# cypress-demo

Cypress test suite covering API and UI scenarios. Built as a practical demonstration of Cypress capabilities alongside Playwright.

## Stack

- Cypress 15
- JavaScript
- GitHub Actions CI

## Test Coverage

### API Tests - Petstore (`petstore.api.cy.js`)

- GET /pet/findByStatus - validates response structure and pet object schema
- POST & GET /pet - creates a pet and verifies it exists
- GET /store/inventory - validates inventory schema

### UI Tests - GitHub Navigation (`github.ui.cy.js`)

- Sign In page navigation
- Pricing page navigation
- Sign Up form navigation

## Project Structure

```
cypress/
  e2e/
    petstore.api.cy.js   - API tests
    github.ui.cy.js      - UI tests
  fixtures/
  support/
cypress.config.js        - Cypress configuration
.github/workflows/ci.yml - GitHub Actions workflow
```

## Configuration

`baseUrl` and `BASE_URL` are set in `cypress.config.js`. No secrets required - Petstore is a public API.

## Run locally

```bash
npm install
npx cypress run
```

## CI

Tests run automatically on push and pull request to `main` via GitHub Actions.
