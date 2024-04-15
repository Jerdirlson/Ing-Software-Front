import SimpleTable from "../../src/components/SimpleTable"

describe('Prueba unitaria del componente SimpleTable', () => {
  beforeEach(() => {
    cy.mount(<SimpleTable />);
  });

  it('Verificar texto en la tabla', () => {
    cy.contains('th', 'Nombres Completos').should('be.visible');

    cy.contains('tfoot th', 'ID').should('contain', 'Mi ID')

    cy.get('tbody td').first().next().should('contain', 'Ivonne');

    cy.contains('div button', 'Página Siguiente').click();

    cy.get('tbody td').first().next().should('contain', 'Samuel');
    
    cy.contains('div button', 'Última Página').click();

    cy.get('tbody td').last().prev().should('contain', 'Indonesia');
  });
});