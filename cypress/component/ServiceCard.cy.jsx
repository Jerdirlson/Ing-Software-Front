import ServiceCard from "../../src/components/ServiceCard"

describe('Probar la funcionalidad de la tarjeta de servicios (ServiceCard)', () => {
  it('check everything is working', () => {
    cy.mount(<ServiceCard/>)
  })
})