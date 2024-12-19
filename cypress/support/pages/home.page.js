/// <reference types="cypress" />

export const homePage = {
    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click();
    }
};
//Açoes para abrir o menu