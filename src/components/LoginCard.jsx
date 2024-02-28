import { useState } from "react"

const LoginCard = () => {

    const [focusUsername, setFocusUsername] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)

    // const isDoctor = () => {
    //     return user === "ips@gmail.com"
    // }
    const isFocusUsername = () => {
        return setFocusUsername(true)
    }
    const isBlurUsername = () => {
        return setFocusUsername(false)
    }
    const isFocusPassword = () => {
        return setFocusPassword(true)
    }
    const isBlurPassword = () => {
        return setFocusPassword(false)
    }
    return (
        <article className="bg-white rounded-2xl text-black flex flex-col items-center justify-evenly box-border p-4" style={{ width: '370px', height: '420px' }}>
            <section>
                <header>
                    {/* <img src="" alt="" /> */}
                    <h1 className="text-1xl font-bold flex justify-center">LOGO</h1>
                    <h1 className="text-2xl font-bold">IPS - Salud Pro</h1>
                </header>
            </section>
            <section className="w-full">
                <form action="">
                    <div className="username m-4 p-4">
                        <span className="">
                            {focusUsername === true ? <h3 className="text-sm animate-slide-in-bottom p-0 m-0 animate-duration-slow" >Username</h3> : <h3></h3>}
                            <input className="text-black border-b p-1 border-black focus:outline-none w-full" type="email" onFocus={isFocusUsername} onBlur={isBlurUsername} autoComplete="off" name="username" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        </span>
                    </div>
                    <div className="password m-4 p-4">
                        <span>
                            {focusPassword === true ? <h3 className="text-sm animate-slide-in-bottom p-0 m-0 animate-duration-slow">Password</h3> : <h3></h3>}
                            <input className="text-black border-b p-1 border-black focus:outline-none w-full" type="password" onFocus={isFocusPassword} onBlur={isBlurPassword} name="" placeholder="Password" />
                        </span>
                    </div>
                    <div className="flex justify-center py-4 m-0">
                        <button className="bg-sky-500 rounded-lg px-8 py-1 text-white">
                            Entrar
                        </button>
                    </div>
                </form>
            </section>


            {/* <aside>
                {isDoctor() ? <div className="text-black">Hola DOC</div> : <div className="text-black"> --------</div>}
            </aside> */}
        </article>
    )
}
export default LoginCard