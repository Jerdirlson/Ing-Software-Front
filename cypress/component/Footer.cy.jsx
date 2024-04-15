import Footer from "../../src/components/Footer"

describe('Probar la funcionalidad del pie de pagina (Footer)', () => {
  it('check everything is working', () => {
    cy.mount(<Footer/>)
  })
})