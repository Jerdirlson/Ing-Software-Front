// import { useAuth } from "../../context/AuthContext"
import { Sites } from "../../data/Sites.data"

const className = `border-gray-400 border rounded-lg h-8 p-1`
// cosnt { userLogin } = useAuth()
const RegisterUsers = () => {
    return (

        <>
            <main className="w-full flex flex-col p-16">
                <div className="flex items-center">
                    <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-2xl">Registrar Paciente</h1><div className="w-full h-0.5 bg-gray-400" />
                </div>
                <form onSubmit={""}>
                    <section className="flex px-3 mx-16 mt-7" >
                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Información general</h2>

                            <div className="flex flex-col p-2">
                                <label>Numero de Cédula </label>
                                <input className={className} type="text" name={"Cédula"}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Nombre</label>
                                <input className={className} type="text" name={"Nombre"}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Apellidos</label>
                                <input className={className} type="text" name={"Apellidos"}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Dirección</h2>
                            <div className="flex flex-col my-2">
                                <label >Calle</label>
                                <input className={className} type="text" name={"Barrio"} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label >Direccion</label>
                                <input className={className} type="text" name={"Direccion"} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label >Ciudad</label>
                                <input className={className} type="text" name={"Informacion Adicional"} />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Email</h2>
                            <div className="flex flex-col p-2">
                                <label>Correo electronico</label>
                                <input className={className} type="email" name={"Correo Electronico"}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="flex px-3 mx-16 mt-7" >
                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Información privada</h2>

                            <div className="flex flex-col p-2">
                                <label>Contraseña</label>
                                <input className={className} type="email" name={"Correo Electronico"}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Sede I.P.S</label>
                                <select className={className} type="email" name={"Correo Electronico"}
                                >
                                    <option disabled defaultValue={"Seleccione una sede"} value="">Seleccione una sede</option>
                                    {Sites.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col p-2">
                                <label>EPS</label>
                                <input className={className} type="email" name={"Correo Electronico"}
                                />
                            </div>

                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Rol</h2>
                            <div className="flex flex-col p-2">
                                <label>Rol en el sistema</label>
                                {/* {...register('idRol')} */}
                                <input readOnly className={className} value='4' />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Número de Contacto</h2>
                            <div className="flex flex-col my-2">
                                <label >Celular</label>
                                <input className={className} type="text" name={"telf"} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label >Fijo</label>
                                <input className={className} type="text" name={"fijo"} />
                            </div>
                        </div>
                    </section>

                    <section className="w-full flex justify-start px-3 mx-16 mt-32 ">
                        <button type="submit" className="bg-secondary-blue rounded-lg px-14 py-2 text-white text-2xl">
                            Continuar
                        </button>
                    </section>
                </form>
            </main >
        </>
    )
}
export default RegisterUsers 