#  Frontend Testing Strategy – MERN Stack Client

## Unit Testing
- Used Jest and React Testing Library to test the `Button` component.
- Covered:
  - Rendering with default props
  - Different `variant` and `size` props
  - Disabled state
  - `onClick` handler
  - Additional props (`data-testid`, `aria-label`)
  - Custom className

## Integration Testing
- Folder structure created: `src/tests/integration`
- Integration tests can cover:
  - Form submission behavior
  - API integration using mocked fetch or Axios
  - Interaction between multiple components

## End-to-End Testing (Cypress)
- Cypress is set up in the `client/cypress/` folder
- Test in `e2e/home.cy.js` visits homepage and checks for content
- Can be expanded to test:
  - Login/Register flow
  - Navigation links
  - Full user flows

## Debugging Techniques
- Used `console.log()` and browser dev tools during development
- Used test error messages to improve coverage and logic
- Intend to add error boundaries and global error handling later

## Screenshots
- Test run screenshots (Jest or Cypress) saved in `client/screenshots/results.PNG`


