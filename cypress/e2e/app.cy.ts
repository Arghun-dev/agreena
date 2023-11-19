describe('Navigation', () => {
	it('should navigate to the favourites page', () => {
		// Start from the index page
		cy.visit('/');

		// Find a link with an href attribute containing "about" and click it
		cy.get('a[href*="favourites"]').click();

		// The new url should include "/about"
		cy.url().should('include', '/favourites');

		// The new page should contain an h1 with "Favroutes page"
		cy.get('h1').contains('Favourites');
	});
});

describe('Copy to Clipboard', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should copy the value to clipboard when the button is clicked', () => {
		// Stub the clipboard writeText method
		cy.window().then((win) => {
			cy.stub(win.navigator.clipboard, 'writeText')
				.as('writeTextStub')
				.resolves();
		});

		// Get the text content of the element with data-testid="unique-number"
		cy.get('[data-testid="unique-number"]')
			.first()
			.then(($element) => {
				const expectedValue = $element.text().trim();

				// Click on the button that triggers the copyToClipBoard function
				cy.get('[data-testid="unique-number"]').first().click();

				// Assert that the clipboard writeText method was called with the expected value
				cy.get('@writeTextStub').should('be.calledOnceWith', expectedValue);

				// Optionally, you can also assert that the toast message appears
				cy.contains('Copied Successfully!').should('exist');
				cy.contains('copied to clipboard').should('exist');
			});
	});

	it('should handle copy failure and show an error toast', () => {
		// Stub the clipboard writeText method to simulate failure
		cy.window().then((win) => {
			cy.stub(win.navigator.clipboard, 'writeText').rejects(
				new Error('Mocked error')
			);
		});

		// Click on the button that triggers the copyToClipBoard function
		cy.get('[data-testid="unique-number"]').first().click();

		// Wait for the error toast to appear
		cy.contains('Could not copy!', { timeout: 10000 }).should('exist');
	});
});
