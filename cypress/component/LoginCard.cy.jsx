import LoginCard from "../../src/components/LoginCard"

describe('Probar la funcionalidad de la tarjeta de inicio de sesion (LoginCard)', () => {
  it('check everything is working', () => {
    cy.mount(<LoginCard/>)
  })
})