
const AppoinmenntCard = () => {
    return (
        <article className="flex flex-col flex-wrap w-[352px] h-[415px] rounded-[20px] px-5 pt-8 shadow-xl">
            <h2 className="text-3xl">Citas Presenciales</h2>
            <p>Agenda tus citas para ser atendido de forma
                presencial en nuestras instalaciones,
                elige la fecha y hora que mejor se adapte a ti.</p>
            <div>
                <button className="bg-gradient-to-r from-[#34A192] to-[#3FBA57] text-white">Agendar</button>
            </div>
        </article>
    )
}
export default AppoinmenntCard