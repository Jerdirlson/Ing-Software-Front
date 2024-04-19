import SimpleTable from "../../components/SimpleTable"
import dayjs from "dayjs"
const MedicSchedule = () => {
    const dia = dayjs().format('DD/MM/YYYY')
    return (
        <>
            <main className="w-full flex flex-col p-4">
                <section >
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="font-light text-3xl mb-2">Citas del {dia}</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col p-4">
                        <SimpleTable />
                    </section>

                </section>
            </main >
        </>
    )
}
export default MedicSchedule