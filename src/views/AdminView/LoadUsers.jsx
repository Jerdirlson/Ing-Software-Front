import { useForm } from "react-hook-form";
import Loader2 from "../../components/Loader2"
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { fileSchema } from "../../validations/fileSchema";


const LoadUser = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(fileSchema)
    })

    const onSubmit = (data) => {
        console.log(data)
        alert(JSON.stringify(data));
    };
    return (
        <>
            <main className="w-full flex flex-col p-36 ">
                <section>
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="flex items-center font-light text-3xl mb-2"><ArrowUpTrayIcon className="h-8 w-8 mr-5"/> Subir archivo</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col p-4">
                        <h2 className="text-2xl ">Selecciona el archivo .CSV</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-start p-2 text-lg ">
                                <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file"{...register("file")} />
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Solo se admiten archivos CSV (MAX. 800MB).</p>
                                {errors.file && <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">{errors.file.message}</p>}
                            </div>
                            <button class="w-[100px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary-blue before:to-secondary-blue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                                Subir 
                            </button>
                        </form>
                    </section>
                </section>
            </main>
        </>
        //     <div className="h-screen w-screen  flex items-center justify-center">
        //     <Loader2/>
        // </div>
    )
}
export default LoadUser