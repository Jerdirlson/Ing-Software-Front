import { useCreateSchedule } from "../../hooks/useMedicSchedule";
import dayjs from "dayjs";

const CreateSchedule = () => {
    const { onSubmit } = useCreateSchedule()
    return (
        <main className="w-full flex flex-col">
            <div className="flex items-center">
                <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-2xl">Creación de horarios</h1><div className="w-full h-0.5 bg-gray-400" />
            </div>
            <form onSubmit={onSubmit}>
                <section className="flex flex-col p-4 mt-4">
                    <label className="text-xl text-red-700">Warning</label>
                    <p>Este boton creara los horarios desde el día <strong> {dayjs().format('YYYY/MM/DD')}</strong> hasta<strong> {dayjs().add(30, 'day').format('YYYY/MM/DD')}</strong></p>
                    <button type="submit" className="w-[100px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary-blue before:to-secondary-blue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                        Subir
                    </button>
                </section>
            </form >

            {/* <Loader2 /> */}
        </main >
    )
}
export default CreateSchedule