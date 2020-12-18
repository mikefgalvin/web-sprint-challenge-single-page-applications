// write tests here
describe("User Onboarding Ap", () => {
    // here go our tests
    beforeEach(() => {
      // arbitrary code you want running before tests start
      cy.visit("http://localhost:3000/");
    });

    const nameInput = () => cy.get('input[name="name"]');
    const sizeInput = () => cy.get('select')
    const sauceInput = () => cy.get('[type="radio"]');
    const checkbox = () => cy.get('[type="checkbox"]');
    const siInput = () => cy.get('input[name="specialInstructions"]');
    const submitButton = () => cy.get('.submitButton');
  
    it("sanity test to make sure tests work", () => {
        // false positive
        // 'expect' is an assertion
        // there can be many assertions per test
        // inside the 'it' statement (test) many assertions may be
        // logically grouped together
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
      });

      it(' input test', () => {

        nameInput().should('have.value','');
        siInput().should('have.value','');
        nameInput().type('Mike Galvin');
        nameInput().should('have.value','Mike Galvin');
        siInput().type('special');
        siInput().should('have.value','special');
      });

      it('checkbox test', () => {
          checkbox().check();
      })

      it('form submit test', () => {
        nameInput().type('Mike Galvin');
        sizeInput().select('large');
        sauceInput().check();
        checkbox().check();
        siInput().type('special');
        submitButton().click();
      });

    //   it('form submit test validation', () => {
    //     //test button 
    //     submitButton().should('be.disabled');
    //     //test each type input individually and clear
    //     nameInput().type('TESTER');
    //     submitButton().should('be.disabled');
    //     nameInput().clear();
    //     emailInput().type('mikefgalvin@gmail.com');
    //     submitButton().should('be.disabled');
    //     emailInput().clear();
    //     pwInput().type('12345678');
    //     submitButton().should('be.disabled');
    //     pwInput().clear();
    //     cy.get('[type="checkbox"]').check();
    //     submitButton().should('be.disabled');
    //     cy.get('[type="checkbox"]').uncheck();
    //     //test a fully done form
    //     nameInput().type('TESTER');
    //     emailInput().type('tester@gmail.com');
    //     pwInput().type('12345678');
    //     cy.get('[type="checkbox"]').check();
    //     submitButton().should('not.be.disabled');
    //   });
  
  });