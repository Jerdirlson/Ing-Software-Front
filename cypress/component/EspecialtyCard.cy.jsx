import EspecialtyCard from "../../src/components/EspecialtyCard"

describe('Probar la funcionalidad de la tarjeta de especialidades (EspecialtyCard)', () => {
  it('check everything is working', () => {
    cy.mount(<EspecialtyCard/>)
  })
})