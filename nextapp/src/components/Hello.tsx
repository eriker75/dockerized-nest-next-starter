"use client";
import React, { useState } from 'react'

const HelloBtn = () => {

    const [hello, setHello] = useState<string>("");

    const getHello = async () => {
        try {
            const response = await fetch('http://localhost/api/v1/json'); // Replace with correct URL and port

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Parse JSON response
            console.log(data); // Access fetched data
            console.log(response.status); // Access HTTP status
            setHello(data.hello);
            return data.hello;
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors gracefully, e.g., display user-friendly messages
        }
    }
    return (
        <div>
            <h2>{hello}</h2>
            <button onClick={getHello}>GET HELLO</button>
        </div>
    )
}

export default HelloBtn