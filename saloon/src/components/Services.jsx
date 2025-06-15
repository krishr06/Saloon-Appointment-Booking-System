import React, { useEffect, useState } from "react";
import { UserNav } from "./UserNav";
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/services") // Adjust the URL based on your backend server
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error("Error fetching services:", error));
    }, []);

    return (
        <>
        <UserNav/>
        <div className="mx-auto p-4 place-items-center bg-[url(../images/9.jpg)] bg-cover bg-center bg-no-repeat">
            <h2 className="text-6xl font-bold mb-4">Salon Services</h2>
            <ul className="space-y-4 ">
                {services.map(service => (
                    <li key={service._id} className="border rounded-lg shadow p-8 bg-white">
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                        <div className="flex gap-4">
                            <p className="text-gray-700">Price: ₹{service.price}</p>
                            <p className="text-gray-600">Duration: {service.duration}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default Services;
