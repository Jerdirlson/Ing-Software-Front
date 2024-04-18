// import { useAuth } from "../../context/AuthContext"
import { EPS } from "../../data/EPS"
import { Sites } from "../../data/Sites.data"
import useSignUp from "../../hooks/useSignUp"

const className = `border-gray-400 border rounded-lg h-8 p-1`
// cosnt { userLogin } = useAuth()
const RegisterUsers = () => {
    const { register, onSubmit } = useSignUp()
    return (

        <>
            <main className="w-full flex flex-col p-16">
                <div className="flex items-center">
                    <div className=" bg-gray-400 w-16 h-0.5" /><h1 className="italic font-light px-8 text-nowrap text-2xl">Registrar Paciente</h1><div className="w-full h-0.5 bg-gray-400" />
                </div>
                <form onSubmit={onSubmit}>
                    <section className="flex px-3 mx-16 mt-7" >
                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Información general</h2>

                            <div className="flex flex-col p-2">
                                <label>Numero de Cédula </label>
                                <input className={className} type="text" name={"Cédula"}{...register('numId')}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Nombre</label>
                                <input className={className} type="text" name={"Nombre"}{...register('nameUser')}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Apellidos</label>
                                <input className={className} type="text" name={"Apellidos"} {...register('lastNameUser')}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Dirección</h2>
                            <div className="flex flex-col my-2">
                                <label >Calle</label>
                                <input className={className} type="text" name={"Calle"}{...register('street')} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label >Direccion</label>
                                <input className={className} type="text" name={"Direccion"} {...register('dir')} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label >Ciudad</label>
                                <input className={className} type="text" name={"Ciudad"} {...register('city')} />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Email</h2>
                            <div className="flex flex-col p-2">
                                <label>Correo electronico</label>
                                <input className={className} type="email" name={"Correo Electronico"}{...register('emailUser')}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="flex px-3 mx-16 mt-7" >
                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Información privada</h2>

                            <div className="flex flex-col p-2">
                                <label>Contraseña</label>
                                <input className={className} type="text" name={"Contraseña"}{...register('pwdUser')}
                                />
                            </div>
                            <div className="flex flex-col p-2">
                                <label>Sede I.P.S</label>
                                <select className={className} type="text" name={"SedeIPS"}{...register('siteUser')}
                                >
                                    <option disabled defaultValue={"Seleccione una sede"} value="">Seleccione una sede</option>
                                    {Sites.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col p-2">
                                <label>EPS</label>
                                <select className={className} type="text" name={"EPS"}{...register('idEPS')}
                                >
                                    <option disabled defaultValue={"Seleccione una sede"} value="">Seleccione una eps</option>
                                    {EPS.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Rol</h2>
                            <div className="flex flex-col p-2">
                                <label>Rol en el sistema</label>
                                
                                <input readOnly className={className} value='4'{...register('idRol')} />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/4 mr-24">
                            <h2 className="font-light p-1 text-xl">Número de Contacto</h2>
                            <div className="flex flex-col my-2">
                                <label >Celular</label>
                                <input className={className} type="text" name={"telefono"}{...register('telf')} />
                            </div>
                            <div className="flex flex-col my-2">
                                <label >Fijo</label>
                                <input className={className} type="text" name={"fijo"}{...register('fijo')}  />
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