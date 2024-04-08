import { useSteps } from "../../context/MultiStepContext"
import NEXTBUTTON from '../../assets/svg/icons/NextButton.svg'

const Confirm = () => {
    const { backStep , watch} = useSteps()
    const data = watch();
    return (
        <>
            <button className='justify-start rotate-180' onClick={() => backStep()}>
                <img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img>
            </button>
            <div className="flex flex-col">
                {Object.keys(data).map(key => (
                    data[key]
                ))}

                <button type='submit'><img src={NEXTBUTTON} alt="Continuar" className='mx-3'></img></button>
            </div>

        </>
    )

}
export default Confirm