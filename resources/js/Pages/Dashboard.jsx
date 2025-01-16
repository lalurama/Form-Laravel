import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

const headData = ["No", "Nama", "Email", "No_Hp", "Kelas", "Alamat", "Action"];
const dataSiswa = [
    {
        no: 1,
        nama: "Nugroho Dwi Aji",
        email: "Ht9nE@example.com",
        no_hp: "082234567890",
        kelas: "X RPL 1",
        alamat: "Jl. Raya Tanjung",
    },
    {
        no: 1,
        nama: "Satria Bgaskara bayu putra pradana",
        email: "Ht9nE@example.com",
        no_hp: "082234567890",
        kelas: "X RPL 1",
        alamat: "Jl. Raya Tanjung",
    },
];
export default function Dashboard({ auth }) {

    const api = axios.create({
        baseURL: "http://localhost:8000/api",
    });
    const [datas, setdatas] = useState([]);

    const ambilData = async () => {
        const response = await api.get("/datasiswa");
        console.log(response.data)
        setdatas(response.data)

    };

    useEffect(() => {
        ambilData();
    }, []);



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8 flex justify-center">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-fit p-5">
                        <div className="flex justify-center">
                            <table className="">
                                <tr className="">
                                    {headData.map((item, index) => (
                                        <th
                                            className="border-2 py-2 px-2"
                                            key={index}
                                        >
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                                {datas.map((item, index) => (
                                    <tr className="" key={index}>
                                        <td className="border-2 py-2 px-2">
                                            {index + 1}
                                        </td>
                                        <td className="border-2 py-2 px-2">
                                            {item.nama}
                                        </td>
                                        <td className="border-2 py-2 px-2">
                                            {item.email}
                                        </td>
                                        <td className="border-2 py-2 px-2">
                                            {item.no_hp}
                                        </td>
                                        <td className="border-2 py-2 px-2">
                                            {item.kelas}
                                        </td>
                                        <td className="border-2 py-2 px-2">
                                            {item.alamat}
                                        </td>
                                        <td className="border-r-2 border-b-2 py-2 px-2 flex gap-2">
                                            <PrimaryButton className="bg-red-600">
                                                Delete
                                            </PrimaryButton>
                                            <PrimaryButton className="bg-green-600" >
                                                Edit
                                            </PrimaryButton>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
