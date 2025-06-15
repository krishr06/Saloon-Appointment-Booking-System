import React from 'react'
import { UserNav } from './UserNav'

export const UserDashboard = () => {
  return (
    <>
    <UserNav/>
    <section className="flex flex-col items-center justify-center h-screen bg-[url(../images/2.jpg)] bg-cover bg-center bg-no-repeat text-white ">
        <p className="text-sm text-gray-300 uppercase tracking-widest ">LUXURY SALOON</p>
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mt-2">User Dashboard</h1>
    </section>
    </>
  )
}
