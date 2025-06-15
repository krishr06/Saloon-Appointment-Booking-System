import React from 'react'
import { AdminNav } from './AdminNav'

export const AdminDashboard = () => {
  return (
    <>
    <AdminNav/>
    <section className="flex flex-col items-center justify-center h-screen bg-[url(../images/4.jpg)] bg-cover bg-center bg-no-repeat text-white ">
        <p className="text-sm text-gray-300 uppercase tracking-widest ">LUXURY SALOON</p>
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mt-2">Admin Dashboard</h1>
    </section>
    </>
  )
}
