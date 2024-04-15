import Alerta from "../../src/components/Alerta"

describe('Probar la funcionalidad de las alertas', () => {
  it('check everything is working', () => {
    cy.mount(<Alerta/>)
  })
})