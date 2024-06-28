"use client"

import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

const datatemp = [
    {
        komponen: "Quiz 1",
        prosentase: "5%",
        nilai: "0"
    },
    {
        komponen: "Tugas 1",
        prosentase: "10%",
        nilai: "0"
    },
    {
        komponen: "UTS",
        prosentase: "20%",
        nilai: "0"
    },
    {
        komponen: "Quiz 2",
        prosentase: "5%",
        nilai: "0"
    },
    {
        komponen: "Tugas 2",
        prosentase: "10%",
        nilai: "0"
    },
    {
        komponen: "FP",
        prosentase: "50%",
        nilai: "0"
    },
    {
        komponen: "Nilai Akhir",
        prosentase: "100%",
        nilai: "0"
    },
]

export default function TableNilai({ path }: any) {
    const url_pemweb = "https://script.google.com/macros/s/AKfycbznl6NuKLDC4hM7Awn5c6Jr5H4c4YPa_uI6IT1lKzHhpTk7I-oCwAbyi0DmHlukie1h/exec";
    const url_pemfung = "https://script.google.com/macros/s/AKfycby0hPrpaklP46FC2wkDGTgwAiRmOTfSmCLlaaSetIgYXwSgFdQ7Rk_UJiPfV6ZvoeEp/exec";
    const [loader, setLoader] = useState(false);
    const [username, setUsername] = useState("");
    const [data, setData] = useState({ Nama: "", Indeks: "", NIM: "" });
    const [dataNilai, setDataNilai] = useState(datatemp);

    const fetchData = async () => {
        try {
            setLoader(true);
            let url = '';
            if (path == "PF-01-03") {
                url = url_pemfung
            } else {
                url = url_pemweb
            }
            const response = await axios.get(`${url}?path=${path}&username=${username}`)
            if (response.data.data) {
                const dataresponse = response.data.data;
                setData(dataresponse);
                setDataNilai([
                    {
                        komponen: "Quiz 1",
                        prosentase: "5%",
                        nilai: dataresponse["Quiz 1"]
                    },
                    {
                        komponen: "Tugas 1",
                        prosentase: "10%",
                        nilai: dataresponse["Tugas 1"]
                    },
                    {
                        komponen: "UTS",
                        prosentase: "20%",
                        nilai: dataresponse["UTS"]
                    },
                    {
                        komponen: "Quiz 2",
                        prosentase: "5%",
                        nilai: dataresponse["Quiz 2"]
                    },
                    {
                        komponen: "Tugas 2",
                        prosentase: "10%",
                        nilai: dataresponse["Tugas 2"]
                    },
                    {
                        komponen: "FP",
                        prosentase: "50%",
                        nilai: dataresponse["Tugas Besar"]
                    },
                    {
                        komponen: "Nilai Akhir",
                        prosentase: "100%",
                        nilai: dataresponse["Nilai Akhir"]
                    },
                ])
            } else {
                setDataNilai(datatemp);
                setData({ Nama: "", Indeks: "", NIM: "Data tidak ada" });
            }
        } catch (error) {
            console.log('catch', error)
        } finally {
            setLoader(false);
        }
    }

    return (
        // <!-- Table Section -->
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto lg:ps-72">
            {/* <!-- Card --> */}
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                            {/* <!-- Header --> */}
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                {/* <!-- Input --> */}
                                <div className="sm:col-span-1">
                                    <label htmlFor="hs-as-table-product-review-search" className="sr-only">Username</label>
                                    <div className="relative">
                                        <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                                            <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Input --> */}

                                <div className="sm:col-span-2 md:grow">
                                    <div className="flex justify-start gap-x-2">
                                        <div className="hs-dropdown [--placement:bottom-left] relative inline-block">
                                            <button onClick={() => fetchData()} id="hs-as-table-table-export-dropdown" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                                Cari
                                            </button>
                                        </div>
                                    </div>
                                    {data.NIM == 'Data tidak ada' && <div className="pt-4">{data.NIM}</div>}
                                </div>
                            </div>
                            {/* <!-- End Header --> */}

                            {/* <!-- Table --> */}
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-800">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Komponen
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Prosentase
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Nilai
                                                </span>
                                            </div>
                                        </th>


                                    </tr>
                                </thead>

                                {loader ? <div className="p-4">Loading ...</div> :
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {dataNilai.map((item, index) => {
                                            return (
                                                <tr key={index} className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                                    <td className="size-px whitespace-nowrap align-top">
                                                        <a className="block p-6" href="#">
                                                            <span className="text-sm text-gray-600 dark:text-neutral-400">{item.komponen}</span>
                                                        </a>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap align-top">
                                                        <a className="block p-6" href="#">
                                                            <span className="text-sm text-gray-600 dark:text-neutral-400">{item.prosentase}</span>
                                                        </a>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap align-top">
                                                        <a className="block p-6" href="#">
                                                            <span className="text-sm text-gray-600 dark:text-neutral-400">{item.nilai}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                }
                            </table>
                            {/* <!-- End Table --> */}

                            {/* <!-- Footer --> */}
                            {(data.Nama !== '' && data.NIM !== 'Data tidak ada') &&
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                    {data.Nama} dengan NIM {data.NIM} mendapatkan nilai akhir dengan indeks {data.Indeks}
                                </div>}
                            {/* <!-- End Footer --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Card --> */}
        </div>
        // {/* <!-- End Table Section --> */ }
    )
}