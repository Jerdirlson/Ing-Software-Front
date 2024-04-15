import NavBar from "../../src/components/NavBar"

describe('Probar la funcionalidad de la barra de navegacion (NavBar)', () => {
  it('check everything is working', () => {
    cy.mount(<NavBar/>)
  })
})