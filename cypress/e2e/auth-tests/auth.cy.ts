describe("login module tests (auth)", () => {
  context("Mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    describe("Submitting a login with an incorrect email and invalid password field", () => {
      it("should visit authenticate page", () => {
        cy.visit("/auth");
      });

      it("When insert incorret email and password field", () => {
        cy.get('[data-cy="input-email"]').type("fake@.com");
        cy.get('[data-cy="input-password"]').type("123");
      });

      it("When Submitting incorretand password and email field", () => {
        cy.get('[data-cy="submit"]').click();
      });

      it("Then message Please enter a valid email address should be displayed and Minimum 4 characters", () => {
        cy.get('[data-cy="error-email"]').should("contain.text", "Informe um email válido");
        cy.get('[data-cy="error-password"]').should("contain.text", "Mínimo de 4 caracteres");
      });
    });

    describe("When you successfully log in", () => {
      it("When insert email and password field", () => {
        cy.get('[data-cy="input-password"]').clear().type("12345678");
        cy.get('[data-cy="input-email"]').clear().type("renan.epd@gmail.com");
      });

      it("When Submitting login and redirect page", () => {
        cy.get('[data-cy="submit"]').click();
        cy.url().should("include", "/home");
      });
    });
  });
});
