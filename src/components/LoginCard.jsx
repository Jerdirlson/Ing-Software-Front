import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../validations/userSchema"
import LOGO_BLUE_IPS from '../assets/img/logos/LogoIpsBlue_Mesa de trabajo 1.png'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"
import { roles } from "../utils/roles"
import { useEffect, useState } from "react"
import LoginModal from "./LoginModal"



/**
 * This component represents the Card that is displayed on the LOGIN section
 * contains 2 inputs and a resolver function
 * @returns {Component} LoginCard
 */
const LoginCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
    })
    const { signinContext, loading, setLoading } = useAuth()
    const navigate = useNavigate()
    const [errorOnResponse, setErrorOnResponse] = useState(false)
    //Mientras espera colocar un loader o algo ...
    const onSubmit = handleSubmit(async data => {
        try {
            setLoading(true)
            const response = await signinContext(data)
            console.log(response)
            if (response.user.idRol === roles.USER) {
                console.log(response.responseModule)
                response ? navigate(response.responseModule[0].link) : ''
            } else {
                console.log('sss')
                response ? navigate(response.responseModule[1].link) : ''
            }
        } catch (e) {
            setErrorOnResponse(true)
            console.log('error', e)
        } finally {
            setLoading(false)
        }
    })
    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorOnResponse(false); // Ocultar la alerta automáticamente después de un tiempo
        }, 3000);
        return () => clearTimeout(timer);
    }, [errorOnResponse]);
    return (
        <article className="bg-white rounded-2xl text-black flex flex-col items-center justify-evenly box-border p-4 w-80 sm:w-[370px] sm:h-[420px] relative">
            {loading ? <Loader /> : ''}
            {errorOnResponse ? <LoginModal /> : ''}
            <header>
                <div className="flex items-center justify-center w-64 p-2 mt-2">
                    <img src={LOGO_BLUE_IPS} alt="logo_ips" />
                </div>
                <h1 className="text-xl flex justify-center">Iniciar Sesión</h1>
            </header>
            <section className="w-full">
                <form onSubmit={onSubmit}>
                    <div className="m-4 p-4">
                        <span className="relative">
                            <input className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer" type="email" autoComplete="off" placeholder=""
                                {...register('email')}
                            />

                            <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-90 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Email</label>
                        </span>
                        {
                            errors.email?.message && <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">{errors.email.message}</p>
                        }
                    </div>
                    <div className="m-4 p-4">
                        <span className="relative">
                            <input className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer" type="password" autoComplete="off" placeholder=""
                                {...register('password')}
                            />

                            <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-90 top-1 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Password</label>
                        </span>
                        {
                            errors.password?.message && <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">{errors.password.message}</p>
                        }
                    </div>
                    <div className="flex justify-center py-4 m-0">
                        <button type="submit" className="bg-sky-500 rounded-lg px-8 py-1 text-white">
                            Entrar
                        </button>
                    </div>
                </form>
            </section>
        </article>
    )
}
export default LoginCard