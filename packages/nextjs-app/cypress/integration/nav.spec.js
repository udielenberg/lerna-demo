/// <reference types="cypress" />
// @ts-check
describe("Nav Menus", () => {
	it("Should visit home page", () => {
		cy.visit("/home");
		cy.contains("Home Page");
	});
	it("Should visit content page", () => {
		cy.get("[data-cy='/content']").click();
		cy.contains("Content Page");
	});
	it("Should visit about page", () => {
		cy.get("[data-cy='/about']").click();
		cy.contains("About Page");
	});
	it("Should visit ssr page", () => {
		cy.get("[data-cy='/ssr']").click();
		cy.contains("SSR Page");
	});
});
