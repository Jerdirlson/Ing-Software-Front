// import { useForm } from "react-hook-form";
// import Loader2 from "../../components/Loader2"
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { fileSchema } from "../../validations/fileSchema";
// import { send_csv } from "../../services/sendCSV.service";

import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { send_csv } from '../../services/sendCSV.service';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [csvData, setCSV] = useState(null);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: acceptedFiles => {
            setFile(acceptedFiles[0]);
        },
    });

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onload = event => {
                const csvData = event.target.result;
                setCSV(csvData)
                const rows = csvData.split('\n');
                const data = rows.map(row => row.split(','));
                setData(data);
            };
            reader.readAsText(file);
        }
    }, [file]);
    const onClick = async () => {
        try {
            const data = {
                file: csvData
            }
            const res = await send_csv(data)
        } catch (e) {
            console.log(e)

        }
    }
    return (
        <>
            <main className="w-full flex flex-col p-36 ">
                <section>
                    <header className="flex flex-col items-center p-4 mt-4">
                        <h1 className="flex items-center font-light text-3xl mb-2"><ArrowUpTrayIcon className="h-8 w-8 mr-5" /> Subir archivo</h1>
                        <div className="w-full h-0.5 bg-slate-400" />
                    </header>
                    <section className="flex flex-col p-4">
                        <h2 className="text-2xl mb-4">Selecciona el archivo .CSV</h2>
                        <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            {
                                isDragActive ? <>
                                    <h1 className="text-xl text-primary-blue">Estas colocando un archivo</h1>
                                    <p>Suelta el archivo ...</p>
                                </> : <div className='border border-primary-blue w-40 h-40 p-4 cursor-pointer flex items-center justify-center text-center'>Arrastralo o da click</div>
                            }
                            {file && (
                                <p className="p-2">
                                    Archivo Seleccionado: 
                                    <strong className="px-2">{file.name}</strong>
                                </p>
                            )}
                        </div>
                        <button onClick={() => onClick()} className="w-[100px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary-blue before:to-secondary-blue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                            Subir
                        </button>
                    </section>
                </section>
            </main>
        </>

    );
};
export default FileUploader

// const LoadUser = () => {
//     const { register, handleSubmit, formState: { errors }, watch } = useForm({
//         resolver: yupResolver(fileSchema)
//     })

//     const onSubmit = async(data) => {
//         try {
//             console.log(data)
//             alert(JSON.stringify(data));
//             // const formData = new FormData();
//             // formData.append("file", data.file[0]);
//             // console.log(formData);

//             const res = await send_csv(data)
//             console.log(res)
//         } catch (err) {
//             console.log(err)
//         }

//     };
//     return (
//         <>
// <main className="w-full flex flex-col p-36 ">
//     <section>
//         <header className="flex flex-col items-center p-4 mt-4">
//             <h1 className="flex items-center font-light text-3xl mb-2"><ArrowUpTrayIcon className="h-8 w-8 mr-5" /> Subir archivo</h1>
//             <div className="w-full h-0.5 bg-slate-400" />
//         </header>
//         <section className="flex flex-col p-4">
//             <h2 className="text-2xl ">Selecciona el archivo .CSV</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="flex flex-col items-start p-2 text-lg ">
//                     <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="text" type="file"{...register("file")} />
//                     <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Solo se admiten archivos CSV (MAX. 800MB).</p>
//                     {errors.file && <p className="text-sm text-red-600 animate-horizontal-vibration animate-iteration-count-once">{errors.file.message}</p>}
//                 </div>
// <button class="w-[100px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary-blue before:to-secondary-blue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
//     Subir
// </button>
//             </form>
//         </section>
//     </section>
// </main>
//         </>
//         //     <div className="h-screen w-screen  flex items-center justify-center">
//         //     <Loader2/>
//         // </div>
//     )
// }
// export default LoadUser
