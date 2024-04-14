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
            "id": 1,
            "name": "Ivonne",
            "lastname": "De Vuyst",
            "email": "idevuyst0@redcross.org",
            "country": "China",
            "dayOfBirth": "11/26/2022"
        },
        {
            "id": 2,
            "name": "Vida",
            "lastname": "Fidal",
            "email": "vfidal1@tumblr.com",
            "country": "China",
            "dayOfBirth": "6/17/2023"
        },
        {
            "id": 3,
            "name": "Patten",
            "lastname": "Govini",
            "email": "pgovini2@nymag.com",
            "country": "Russia",
            "dayOfBirth": "12/12/2022"
        },
        {
            "id": 4,
            "name": "Editha",
            "lastname": "Buttwell",
            "email": "ebuttwell3@disqus.com",
            "country": "Panama",
            "dayOfBirth": "2/22/2023"
        },
        {
            "id": 5,
            "name": "Karleen",
            "lastname": "Earthfield",
            "email": "kearthfield4@phpbb.com",
            "country": "Argentina",
            "dayOfBirth": "11/21/2022"
        },
        {
            "id": 6,
            "name": "Gris",
            "lastname": "Duggen",
            "email": "gduggen5@amazon.co.jp",
            "country": "Indonesia",
            "dayOfBirth": "2/12/2023"
        },
        {
            "id": 7,
            "name": "Tanney",
            "lastname": "Gaughan",
            "email": "tgaughan6@washingtonpost.com",
            "country": "France",
            "dayOfBirth": "3/7/2023"
        },
        {
            "id": 8,
            "name": "Scott",
            "lastname": "Ryce",
            "email": "sryce7@hugedomains.com",
            "country": "Canada",
            "dayOfBirth": "11/7/2022"
        },
        {
            "id": 9,
            "name": "Larissa",
            "lastname": "Hadlee",
            "email": "lhadlee8@constantcontact.com",
            "country": "Portugal",
            "dayOfBirth": "10/25/2023"
        },
        {
            "id": 10,
            "name": "Walton",
            "lastname": "Petcher",
            "email": "wpetcher9@creativecommons.org",
            "country": "Indonesia",
            "dayOfBirth": "1/13/2023"
        },
        {
            "id": 11,
            "name": "Samuel",
            "lastname": "Dislee",
            "email": "sdisleea@earthlink.net",
            "country": "Ukraine",
            "dayOfBirth": "2/8/2023"
        },
        {
            "id": 12,
            "name": "Woodman",
            "lastname": "Goodee",
            "email": "wgoodeeb@friendfeed.com",
            "country": "Argentina",
            "dayOfBirth": "12/4/2022"
        },
        {
            "id": 13,
            "name": "Noah",
            "lastname": "Althrope",
            "email": "nalthropec@51.la",
            "country": "Russia",
            "dayOfBirth": "7/25/2023"
        },
        {
            "id": 14,
            "name": "Wilie",
            "lastname": "Mealham",
            "email": "wmealhamd@privacy.gov.au",
            "country": "France",
            "dayOfBirth": "11/23/2022"
        },
        {
            "id": 15,
            "name": "Effie",
            "lastname": "Loughlin",
            "email": "eloughline@mozilla.com",
            "country": "China",
            "dayOfBirth": "12/31/2022"
        },
        {
            "id": 16,
            "name": "Noellyn",
            "lastname": "Greenrde",
            "email": "ngreenrdef@istockphoto.com",
            "country": "Peru",
            "dayOfBirth": "2/19/2023"
        },
        {
            "id": 17,
            "name": "Mavis",
            "lastname": "Aire",
            "email": "maireg@sitemeter.com",
            "country": "Indonesia",
            "dayOfBirth": "9/11/2023"
        },
        {
            "id": 18,
            "name": "Ingeborg",
            "lastname": "Salmons",
            "email": "isalmonsh@google.es",
            "country": "Sweden",
            "dayOfBirth": "7/16/2023"
        },
        {
            "id": 19,
            "name": "Pamelina",
            "lastname": "Mannock",
            "email": "pmannocki@epa.gov",
            "country": "China",
            "dayOfBirth": "12/17/2022"
        },
        {
            "id": 20,
            "name": "Artemis",
            "lastname": "Lensch",
            "email": "alenschj@icio.us",
            "country": "Czech Republic",
            "dayOfBirth": "3/23/2023"
        },
        {
            "id": 21,
            "name": "Maggi",
            "lastname": "Stower",
            "email": "mstowerk@ebay.co.uk",
            "country": "Portugal",
            "dayOfBirth": "10/4/2023"
        },
        {
            "id": 22,
            "name": "Jaime",
            "lastname": "Pluvier",
            "email": "jpluvierl@histats.com",
            "country": "Democratic Republic of the Congo",
            "dayOfBirth": "2/16/2023"
        },
        {
            "id": 23,
            "name": "Romeo",
            "lastname": "Wayte",
            "email": "rwaytem@bloglines.com",
            "country": "China",
            "dayOfBirth": "1/2/2023"
        },
        {
            "id": 24,
            "name": "Ilyssa",
            "lastname": "Ferrieres",
            "email": "iferrieresn@digg.com",
            "country": "Haiti",
            "dayOfBirth": "9/15/2023"
        },
        {
            "id": 25,
            "name": "Chickie",
            "lastname": "Cowup",
            "email": "ccowupo@myspace.com",
            "country": "Sweden",
            "dayOfBirth": "8/8/2023"
        },
        {
            "id": 26,
            "name": "Felice",
            "lastname": "Saphin",
            "email": "fsaphinp@lycos.com",
            "country": "Sweden",
            "dayOfBirth": "7/7/2023"
        },
        {
            "id": 27,
            "name": "Dusty",
            "lastname": "Wettern",
            "email": "dwetternq@dion.ne.jp",
            "country": "Tanzania",
            "dayOfBirth": "8/16/2023"
        },
        {
            "id": 28,
            "name": "Lonnie",
            "lastname": "Silveston",
            "email": "lsilvestonr@php.net",
            "country": "China",
            "dayOfBirth": "8/18/2023"
        },
        {
            "id": 29,
            "name": "Raymond",
            "lastname": "Andersen",
            "email": "randersens@tinypic.com",
            "country": "Thailand",
            "dayOfBirth": "1/1/2023"
        },
        {
            "id": 30,
            "name": "Linzy",
            "lastname": "Broun",
            "email": "lbrount@skype.com",
            "country": "China",
            "dayOfBirth": "5/21/2023"
        },
        {
            "id": 31,
            "name": "Ellary",
            "lastname": "Ashelford",
            "email": "eashelfordu@chronoengine.com",
            "country": "Greece",
            "dayOfBirth": "10/22/2023"
        },
        {
            "id": 32,
            "name": "Darbee",
            "lastname": "Wilding",
            "email": "dwildingv@ft.com",
            "country": "China",
            "dayOfBirth": "3/12/2023"
        },
        {
            "id": 33,
            "name": "Rad",
            "lastname": "Tuson",
            "email": "rtusonw@sciencedirect.com",
            "country": "Russia",
            "dayOfBirth": "8/4/2023"
        },
        {
            "id": 34,
            "name": "Ashla",
            "lastname": "Guillon",
            "email": "aguillonx@stumbleupon.com",
            "country": "Canada",
            "dayOfBirth": "10/25/2023"
        },
        {
            "id": 35,
            "name": "Amalle",
            "lastname": "Pallent",
            "email": "apallenty@go.com",
            "country": "Kenya",
            "dayOfBirth": "9/10/2023"
        },
        {
            "id": 36,
            "name": "Zackariah",
            "lastname": "Mattedi",
            "email": "zmattediz@bbc.co.uk",
            "country": "Philippines",
            "dayOfBirth": "4/9/2023"
        },
        {
            "id": 37,
            "name": "Lynnett",
            "lastname": "Bygate",
            "email": "lbygate10@apple.com",
            "country": "Philippines",
            "dayOfBirth": "11/1/2022"
        },
        {
            "id": 38,
            "name": "Enid",
            "lastname": "Dubble",
            "email": "edubble11@berkeley.edu",
            "country": "China",
            "dayOfBirth": "11/22/2022"
        },
        {
            "id": 39,
            "name": "Olympie",
            "lastname": "Keble",
            "email": "okeble12@cnbc.com",
            "country": "Portugal",
            "dayOfBirth": "2/3/2023"
        },
        {
            "id": 40,
            "name": "Paxton",
            "lastname": "Lardge",
            "email": "plardge13@oracle.com",
            "country": "Philippines",
            "dayOfBirth": "2/23/2023"
        },
        {
            "id": 41,
            "name": "Salim",
            "lastname": "Devlin",
            "email": "sdevlin14@angelfire.com",
            "country": "France",
            "dayOfBirth": "3/20/2023"
        },
        {
            "id": 42,
            "name": "Alyson",
            "lastname": "Craisford",
            "email": "acraisford15@state.tx.us",
            "country": "Bangladesh",
            "dayOfBirth": "2/8/2023"
        },
        {
            "id": 43,
            "name": "Siusan",
            "lastname": "Hof",
            "email": "shof16@globo.com",
            "country": "Sweden",
            "dayOfBirth": "5/31/2023"
        },
        {
            "id": 44,
            "name": "Ardine",
            "lastname": "Fantin",
            "email": "afantin17@lulu.com",
            "country": "China",
            "dayOfBirth": "4/25/2023"
        },
        {
            "id": 45,
            "name": "Wheeler",
            "lastname": "Hudspith",
            "email": "whudspith18@msn.com",
            "country": "Indonesia",
            "dayOfBirth": "4/18/2023"
        },
    ];
function SimpleTable() {
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            footer: "Mi ID",
        },
        {
            header: "Nombres Completos",
            columns: [
                {
                    header: "Nombres",
                    accessorKey: "name",
                    footer: "Mi nombre",
                },
                {
                    header: "Apellido",
                    accessorKey: "lastname",
                    footer: "Mi apellido",
                },
            ],
        },
        {
            header: "Email",
            accessorKey: "email",
            footer: "Mi email",
        },
        {
            header: "Country",
            accessorKey: "country",
            footer: "Mi pais",
        },
        {
            header: "Fecha de nacimiento",
            accessorKey: "dayOfBirth",
            footer: "Mi fecha de nacimiento",
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
                    <tfoot>
                        {table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id}>
                                {footerGroup.headers.map((footer) => (
                                    <th key={footer.id} className="px-4 py-2">
                                        {flexRender(
                                            footer.column.columnDef.footer,
                                            footer.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
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
