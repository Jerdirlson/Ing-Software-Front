import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../validations/userSchema"
import LOGO_BLUE_IPS from '../assets/img/logos/LogoIpsBlue_Mesa de trabajo 1.png'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";



/**
 * This component represents the Card that is displayed on the LOGIN section
 * contains 2 inputs and a resolver function
 * @returns {Component} LoginCard
 */
const LoginCard = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: zodResolver(userSchema),
    })
    const { signinContext, loading, setLoading } = useAuth()
    const navigate = useNavigate()
    //Mientras espera colocar un loader o algo ...
    const onSubmit = handleSubmit(async data => {
        try {
            setLoading(true)
            const response = await signinContext(data)
            console.log(response)
            if (response.user.idRol === 1) {
                console.log(response.responseModule)
                response ? navigate(response.responseModule[0].link) : ''
            } else {
                console.log('sss')
                response ? navigate(response.responseModule[1].link) : ''
            }
        } catch (e) {
            console.log('error', e)
        } finally {
            setLoading(false)
        }
    })
    return (
        <article className="bg-white rounded-2xl text-black flex flex-col items-center justify-evenly box-border p-4 w-80 sm:w-[370px] sm:h-[420px] relative">
            {loading ? <div className="flex-col gap-4 w-full flex items-center justify-center absolute z-50">
                <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin-clockwise animate-duration-1000 animate-iteration-count-infinite border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                    </svg>
                </div>
            </div> : ''}
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