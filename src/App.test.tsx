import { mount } from "@cypress/react";
import App from "./App";

it("Interacts with field", () => {
  mount(<App />);
  cy.get('input[name="name"]')
    .type("Anish")
    .should("have.value", "Anish")
    .get('input[name="email"]')
    .type("anishprashun118@gmail.com")
    .should("have.value", "anishprashun118@gmail.com")
    .get('input[name="password"]')
    .type("Amity@123")
    .should("be.visible");

  cy.screenshot();
});
