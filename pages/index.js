import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get('http://localhost:5000/api/services');
            setServices(response.data);
        };
        fetchServices();
    }, []);

    return (
        <>
            <Head>
                <title>Hana Lei Surf School</title>
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
                <h1 className="text-4xl font-bold text-white">Welcome to Hana Lei Surf School</h1>
                <ul>
                    {services.map(service => (
                        <li key={service.name} className="text-white">{service.name}</li>
                    ))}
                </ul>
                {/* ... other components ... */}
            </main>
        </>
    );
}


