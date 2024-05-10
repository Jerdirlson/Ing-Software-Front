import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { editHistoryClient } from "../../services/doctor/editHistoryClient.service";

const AppointmentOnGoing = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (medicStuff) => {
        try {
            medicStuff['idClient'] = data.id
            console.log(medicStuff)
            const res = await editHistoryClient(medicStuff)
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <>

            <main className="w-full flex flex-col p-4">
                <section >
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="font-light text-3xl mb-2">Cita de <b>{data.nameService}</b> para <b>{data.fullName}</b></h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col p-4">
                        {/* {tabla} */}
                        <div className="my-4">
                            <button className="border border-primaryGray rounded-2xl p-3">Consultar historial clinico</button>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col">
                                <label>Observaciones</label>
                                <div className="w-10/12 mb-4">
                                    <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." {...register('conclusion')}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="bg-primaryGray text-white rounded-xl p-4">
                                Finalizar Cita
                            </button>
                        </form>

                    </section>

                </section>
            </main >

        </>

    )
}
export default AppointmentOnGoing

