
describe('Formulario de Login', () => {
    
	it('Ingresando credenciales vacias', () => {
        cy.visit('http://localhost:3001');
        cy.get('#btn-login').click();
	});

    it('Ingresando credenciales incorrectas', () => {
		cy.get('#inp-email').type('algo@gmail.com');
		cy.get('#inp-password').type('aaabbb');
        cy.get('#btn-login').click();
	});


	it('Ingresando credenciales correctas', () => {
		cy.get('#inp-email').type('vorellana99@gmail.com');
		cy.get('#inp-password').type('123456');
        cy.get('#btn-login').click();
	});

});