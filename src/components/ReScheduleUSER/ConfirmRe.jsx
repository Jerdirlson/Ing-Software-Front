import { useSteps } from "../../context/MultiStepContext"
import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'

const Confirm = () => {
    const { backStep, watch, selectedDate, sent } = useSteps()
    const data = watch();
    return (
        <>
            {sent ? '' : <button className='justify-start rotate-180' onClick={() => backStep()}>
                <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
            </button>}
            <section className='flex flex-col items-center'>
                <h1 className='font-bold text-4xl '>Confirmación de cita</h1>

                <section className="grid grid-cols-2 gap-x-36 gap-y-4 p-8">
                    <div>
                        <h1>Fecha:</h1>
                        <p className="font-light">{selectedDate}</p>
                    </div>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <h1>
                                {key}
                            </h1>
                            <p className="font-light">
                                {value}
                            </p>
                        </div>
                    ))}
                </section>
            </section>
            {sent ? '' : <div className='flex w-auto items-center justify-end'>
                <button type="submit">
                    <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
                </button>

            </div>}

        </>
    )

}
export default Confirm