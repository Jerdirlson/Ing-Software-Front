import SimpleTable from "../../src/components/SimpleTable"

describe('Probar la funcionalidad de una tabla simple', () => {
  it('check everything is working', () => {
    cy.mount(<SimpleTable/>)
  })
})