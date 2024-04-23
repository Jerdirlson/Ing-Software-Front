import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import dayjs from "dayjs";
const data = [
    {
        "paciente": "Juan Pérez",
        "hora": "08:30",
        "edad": 32,
        "genero": "masculino",
        "dayOfBirth": "1992-03-15"
    },
    {
        "paciente": "María García",
        "hora": "09:15",
        "edad": 45,
        "genero": "femenino",
        "dayOfBirth": "1979-07-22"
    },
    {
        "paciente": "Luis Martínez",
        "hora": "10:00",
        "edad": 28,
        "genero": "no binario",
        "dayOfBirth": "1996-11-10"
    },
    {
        "paciente": "Ana López",
        "hora": "11:45",
        "edad": 50,
        "genero": "femenino",
        "dayOfBirth": "1974-09-05"
    },
    {
        "paciente": "Carlos González",
        "hora": "14:20",
        "edad": 19,
        "genero": "masculino",
        "dayOfBirth": "2005-02-28"
    },

    {
        "paciente": "Elena Rodríguez",
        "hora": "09:30",
        "edad": 38,
        "genero": "femenino",
        "dayOfBirth": "1986-12-10"
    },
    {
        "paciente": "Javier López",
        "hora": "11:00",
        "edad": 55,
        "genero": "masculino",
        "dayOfBirth": "1969-08-25"
    },
    {
        "paciente": "Laura Martín",
        "hora": "13:45",
        "edad": 22,
        "genero": "femenino",
        "dayOfBirth": "2002-05-03"
    },
    {
        "paciente": "David Sánchez",
        "hora": "15:20",
        "edad": 30,
        "genero": "masculino",
        "dayOfBirth": "1994-09-18"
    },
    {
        "paciente": "Sofía González",
        "hora": "16:45",
        "edad": 65,
        "genero": "femenino",
        "dayOfBirth": "1959-04-27"
    },
    {
        "paciente": "Peso Pluma",
        "hora": "19:45",
        "edad": 25,
        "genero": "femenino",
        "dayOfBirth": "1959-04-27"
    }

];
function SimpleTable() {
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const columns = [
        {
            header: "Paciente",
            accessorKey: "paciente",
        },
        {
            header: "Hora",
            accessorKey: "hora",
        },
        {
            header: "Edad",
            accessorKey: "edad",
        },
        {
            header: "Genero",
            accessorKey: "genero",
        },
        {
            header: "Fecha de nacimiento",
            accessorKey: "dayOfBirth",
            cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
        },
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
