import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../validations/userSchema"
import LOGO_BLUE_IPS from '../assets/img/logos/LogoIpsBlue_Mesa de trabajo 1.png'


const LoginCard = () => {


    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: zodResolver(userSchema),
    })
    const host = import.meta.env.VITE_HOST
    const onSubmit = handleSubmit((data) => {
        console.log(data)

        // fetch(`${host}api/auth`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //     .then(result => {
        //         console.log(result.token)
        //         if (result.token) {
        //             localStorage.setItem('token', result.token)
        //             setLoginSuccessful(true);
        //         } else {
        //             setLoginSuccessful(false);
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    })
    return (
        <article className="bg-white rounded-2xl text-black flex flex-col items-center justify-evenly box-border p-4 " style={{ width: '370px', height: '420px' }}>
            <section>
                <header>
                    <div className="flex items-center justify-center w-64 p-2 mt-2">
                        <img src={LOGO_BLUE_IPS} alt="logo_ips" />
                    </div>
                    <h1 className="text-xl flex justify-center">Iniciar Sesión</h1>
                </header>
            </section>
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