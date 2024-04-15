import AppoinmenntCard from "../../src/components/AppointmentCard"

describe('Probar la funcionalidad de la carta de citas (AppointmentCard)', () => {
  it('check everything is working', () => {
    cy.mount(<AppoinmenntCard title = 'Título' info = 'Prueba' showMore='' action='' citaType=''/>)
  })
})