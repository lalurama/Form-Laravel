import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import React from "react";
import { useState } from "react";

export default function InputData({ auth }) {

const [inputData, setinputData] = useState({
    nama:"",
    kelas:"",
    alamat:"",
    no_hp:"",
    email:""
})

const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(inputData)
    const response = await axios.post("http://localhost:8000/api/datasiswa", inputData)
    console.log(response)
    if(response.statusText === "Created"){
        alert("data tersimpan")
        window.location.reload()
    }else{
        alert("data gagal tersimpan")
        window.location.reload()
    }
}

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Input Data
                </h2>
            }
        >
            <div className="mt-10 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-fit p-5 flex flex-col items-center gap-10"
                >
                    <img src="/Picture1.png" alt="" className="h-14 items" />
                    <table className=" flex flex-col w-96">
                        <tr className=" mb-4  flex justify-between items-center ">
                            <td><label htmlFor="" >Nama</label></td>
                            <td> <input type="text" onChange={(e) => setinputData({...inputData, nama: e.target.value})} className="rounded-lg focus:ring-indigo-600  ring-1 ring-indigo-950 border-none "/></td>
                        </tr>
                        <tr className=" mb-4  flex justify-between items-center ">
                            <td><label htmlFor="">Email</label></td>
                            <td><input type="email" onChange={(e) => setinputData({...inputData, email: e.target.value})} className="rounded-lg focus:ring-indigo-600  ring-1 ring-indigo-950 border-none " /></td>
                        </tr>
                        <tr className=" mb-4  flex justify-between items-center ">
                            <td><label htmlFor="">No_Hp</label></td>
                            <td> <input type="text" onChange={(e) => setinputData({...inputData, no_hp: e.target.value})} className="rounded-lg focus:ring-indigo-600  ring-1 ring-indigo-950 border-none "/></td>
                        </tr>
                        <tr className=" mb-4  flex justify-between items-center ">
                            <td><label htmlFor="">Kelas</label></td>
                            <td> <input type="text" onChange={(e) => setinputData({...inputData, kelas: e.target.value})} className="rounded-lg focus:ring-indigo-600  ring-1 ring-indigo-950 border-none "/></td>
                        </tr>
                        <tr className="  flex justify-between items-center ">
                            <td> <label htmlFor="">Alamat</label></td>
                            <td> <input type="text" onChange={(e) => setinputData({...inputData, alamat: e.target.value})} className="rounded-lg focus:ring-indigo-600  ring-1 ring-indigo-950 border-none "/></td>
                        </tr>
                    </table>
                    <PrimaryButton type="submit" className="w-full flex justify-center">Submit</PrimaryButton>
                </form>
            </div>
        </Authenticated>
    );
}
