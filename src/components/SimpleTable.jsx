import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getPacients } from "../services/doctor/pacients.service";
import { useAuth } from "../context/AuthContext";
import { button } from "@material-tailwind/react";
import { EPS } from "../data/EPS";

function SimpleTable() {
    const [data, setData] = useState([])
    // useEffect(() => {

    // }, [userLogin])
    const { userLogin, loading } = useAuth()

    useEffect(() => {
        const dataF = async () => {
            try {
                console.log(userLogin)
                if (!loading) {
                    console.log('in')
                    const dataToSend = {
                        id: userLogin.user.id,
                        // dia: dayjs().format('DD/MM/YYYY')
                        dia: '2024-03-30'
                    }
                    const res = await getPacients(dataToSend)
                    if (res) {
                        const newData = res.users.map(user => ({
                            ...user,
                            fullName: `${user.nameUser} ${user.lastNameUser}`,
                            epsName: EPS.find(eps => eps.id === user.eps)?.name || 'EPS Desconocida'
                        }));
                        setData(newData)
                    }
                }

            } catch (error) {
                console.log(error);
            }
        }
        dataF()
    }, [userLogin])


    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const columns = [
        {
            header: "Paciente",
            accessorKey: "fullName",
        },
        {
            header: "Hora",
            accessorKey: "hora",
        },
        {
            header: "Especialidad",
            accessorKey: "nameService",
        },
        {
            header: "EPS",
            accessorKey: "epsName",
        },
        // {
        //     header: "Fecha de nacimiento",
        //     accessorKey: "dayOfBirth",
        //     cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
        // },
    ];
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    return (
        <div className="flex flex-col">
            <input
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                className="border border-gray-400 rounded-md p-2 mb-4"
                placeholder="Buscar..."
            />

            <div className="overflow-x-auto border border-secondaryGray rounded-xl">
                <table className="table-auto w-full">
                    <thead className="bg-[#F2F2F2]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="px-4 py-2 text-left cursor-pointer"
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div className="flex items-center">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}

                                                {
                                                    { asc: "⬆️", desc: "⬇️" }[
                                                    header.column.getIsSorted() ?? null
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="border px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={() => table.setPageIndex(0)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Primer Página
                </button>
                <button
                    onClick={() => table.previousPage()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Página Anterior
                </button>
                <button
                    onClick={() => table.nextPage()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Página Siguiente
                </button>
                <button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Última Página
                </button>
            </div>
        </div>
    );
}

export default SimpleTable;
