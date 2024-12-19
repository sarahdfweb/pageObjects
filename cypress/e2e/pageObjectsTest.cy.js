/// <reference types="cypress" />


const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const {email, senha} = require('../fixtures/data.json')
const {profilePage} = require("../support/pages/profile.page")
describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/public/getCart*', {
      statusCode: 200,  
      body: {}          
    }).as('blockedCartUrl');
    
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/'); 
    cy.viewport(1280, 720); 

  });

  it('deve fazer o login com sucesso', () => {
    homePage.openMenu('Account')
   
    loginPage.login(email, senha)
    homePage.openMenu('Account')
    
    profilePage.customerName().should('have.text', 'Cliente EBAC')
    
  
  });
});
