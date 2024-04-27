import { useState } from "react";
import Loader2 from "../../components/Loader2"
import { Schedule } from "../../data/Schedule";

const Manage_medic = () => {
    const [isDefaultActive, setIsDefaultActive] = useState(true);
    const className = `border-gray-400 border rounded-lg h-8 p-1`

    return (
        <main className="w-full flex flex-col p-10">
            <div className="flex items-center">
                <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-2xl">Horarios Medico</h1><div className="w-full h-0.5 bg-gray-400" />
            </div>
            <section className="flex p-8 ">
                <section className="mr-52">
                    <div>
                        <h2 className="mb-2">Seleccionar Especialista</h2>
                        <select className={className} type="">
                            <option disabled defaultValue="Selecciona una opción">Selecciona una opción</option>

                        </select >
                    </div>
                    <div>
                        <h2 className="mb-2">Seleccionar Doctor</h2>
                        <select className={className} type="">

                            <option disabled defaultValue="Selecciona una opción">Selecciona una opción</option>

                        </select >
                    </div>
                </section>
                <section>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button
                            type="button"
                            className={`px-4 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-l-lg focus:animate-fade-in focus:animate-delay-0 focus:animate-duration-200 focus:animate-iteration-count-once ${isDefaultActive ? 'bg-gray-900 text-white' : 'bg-transparent'}`}
                            onClick={() => setIsDefaultActive(true)}
                        >
                            Predeterminado
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 text-sm font-medium text-gray-900 border rounded-r-lg border-gray-900 focus:animate-fade-in focus:animate-delay-0 focus:animate-duration-200 focus:animate-iteration-count-once | ${!isDefaultActive ? 'bg-gray-900 text-white' : 'bg-transparent'}`}
                            onClick={() => setIsDefaultActive(false)}
                        >
                            Personalizado
                        </button>
                    </div>
                    {isDefaultActive ?
                        <div className="mt-8">
                            <div className="flex items-center">
                                <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap ">Horarios</h1><div className="w-full h-0.5 bg-gray-400" />
                            </div>
                            <div className="flex  justify-between mt-8">
                                <article class="p-4 w-auto rounded-lg border border-black mr-6 ">
                                    {/* <h1 class="text-2xl font-bold">Horarios disponibles</h1> */}
                                    <ul class="grid gap-4 mt-2">
                                        <li class="flex gap-2 items-center">
                                            <div class="grid gap-1 text-sm flex-1">
                                                <h2 class="font-semibold leading-none line-clamp-2">
                                                    Horario 1
                                                </h2>
                                                <div class="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    6:00 am - 12:00 pm
                                                </div>
                                            </div>

                                        </li>
                                        <li class="flex gap-2 items-center">

                                            <div class="grid gap-1 text-sm flex-1">
                                                <h2 class="font-semibold leading-none line-clamp-2">
                                                    Horario 2
                                                </h2>
                                                <div class="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    2:00 pm - 5:00 pm
                                                </div>
                                            </div>
                                        </li>
                                        <li class="flex gap-2 items-center">
                                            <div class="grid gap-1 text-sm flex-1">
                                                <h2 class="font-semibold leading-none line-clamp-2">
                                                    Horario 3
                                                </h2>
                                                <div class="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                                                    6:00 am - 5:00 pm
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </article>
                                <select className={className} type="">

                                    <option disabled defaultValue="Selecciona una opción">Selecciona una opción</option>
                                    {Schedule.map(horario => <option key={horario.id} value={horario.schedulex}>{horario.name}</option>)}

                                </select >
                            </div>
                        </div> :
                        'Drag & Drop'

                    }

                </section>

            </section>

            {/* <Loader2 /> */}
        </main>
    )
}
export default Manage_medic