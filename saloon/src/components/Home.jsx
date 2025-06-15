import React from 'react';
import { Navbar } from './Navbar';

export const Home = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen bg-[url(../images/4.jpg)] bg-cover bg-center bg-no-repeat text-white ">
        <p className="text-sm text-gray-300 uppercase tracking-widest">Welcome to</p>
        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mt-2">LUXURY SALOON</h1>
      </section>
    </>
  );
};
