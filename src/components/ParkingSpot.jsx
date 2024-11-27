import React, { useState, useEffect } from 'react';

const ParkingSpot = ({ vehicle }) => {
    const { patente, color, fecha_registro } = vehicle || {};
    const [minutesParked, setMinutesParked] = useState(vehicle ? Math.floor((new Date() - new Date(fecha_registro)) / 60000) : 0);

    useEffect(() => {
        if (vehicle) {
            const interval = setInterval(() => {
                setMinutesParked(Math.floor((new Date() - new Date(fecha_registro)) / 60000));
            }, 60000); // Actualiza cada minuto

            return () => clearInterval(interval); // Limpiar intervalo al desmontar
        }
    }, [vehicle, fecha_registro]);




    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-72">
            {
                vehicle ? (
                    <>
                        <h2 className="text-xl font-semibold text-gray-700">Vehículo: {patente}</h2>
                        <p className="text-gray-500">Color: {color}</p>
                        <p className="text-gray-500">Ingreso: {new Date(fecha_registro).toLocaleString()}</p>
                        <p className="text-gray-500">Tiempo estacionado: {minutesParked} min</p>
                        <div className="mt-4">
                            <p className="text-lg font-semibold text-blue-500">Total: ${minutesParked * 50}</p>
                            <button id="boton-pagar" data-patente={patente} className="bg-blue-500 text-white p-2 rounded-lg">Pagar</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold text-gray-700">Disponible</h2>
                        <p className="text-gray-500 w-full"></p>
                        <p className="text-gray-500 w-full"></p>
                        <p className="text-gray-500 w-full"></p>
                        <div className="mt-4">
                            <p className="text-lg font-semibold text-blue-500"></p>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default ParkingSpot;
