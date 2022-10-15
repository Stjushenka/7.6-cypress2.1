const user = require("../fixtures/user.json");
const store = require("../fixtures/store.json");

describe("Admin login", () => {
beforeEach(() => {
        cy.visit("/admin/index.php");
});

it("Should be able to login with correct email and password", () => {
  cy.login(user.validUserEmail, user.validPassword);
  cy.contains(store.deskForEqual);
});

it("Should be able to login with incorrect email and password", () => {
  cy.login(user.invalidUserEmail, user.validPassword);
  cy.contains(store.mistakeForEqual);
});
});