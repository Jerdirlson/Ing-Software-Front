import SideBar from "../../src/components/SideBar"

describe('Probar la funcionalidad de la barra lateral (SideBar)', () => {
  it('check everything is working', () => {
    cy.mount(<SideBar/>)
  })
})