import Calendar from "../../src/components/Calendar"

describe('Probar la funcionalidad del calendario', () => {
  it('check everything is working', () => {
    cy.mount(<Calendar/>)
  })
})