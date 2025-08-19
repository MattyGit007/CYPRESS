// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Custom: set Hotjar survey-dismiss flags in localStorage without navigation --
// Usage: cy.setSurveyDismissFlags() or cy.setSurveyDismissFlags('1657266')
Cypress.Commands.add('setSurveyDismissFlags', (pollId = '1657266') => {
	const done = `${pollId}%2C${pollId}`;
	cy.window({ log: false }).then((win) => {
		try {
			win.localStorage.setItem('_hjMinimizedPolls', pollId);
			win.localStorage.setItem('_hjDonePolls', done);
		} catch (e) {
			// Surface a clear error if localStorage is not accessible
			throw new Error(`Failed to set survey flags in localStorage: ${e?.message || e}`);
		}
	});
});
