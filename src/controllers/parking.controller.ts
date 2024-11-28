import mysql from 'mysql2/promise'

const access = {
    host: 'localhost',
    user: 'root',
    password: 'Inacap.2024',
    database: 'parking'
}

export const pool = await mysql.createPool(access)

export const getVehicles = async () => {
    const [rows] = await pool.execute('SELECT * FROM autos WHERE pago = "PENDIENTE"')
    return rows
}

export const getAllVehicles = async () => {
    const [rows] = await pool.execute('SELECT * FROM autos')
    return rows
}



export const getVehicle = async (patente: string) => {
    const [rows] = await pool.execute('SELECT * FROM autos WHERE patente = ?', [patente])
    return rows
}

export const createVehicle = async (vehicle: any) => {
    const [rows] = await pool.execute('INSERT INTO autos (PATENTE, COLOR, MARCA, TIPO, SLOT) VALUES (?, ?, ?, ?, ?)', [vehicle.patente, vehicle.color, vehicle.marca, vehicle.tipo, vehicle.slot])
    return rows
}

export const updateVehicle = async (vehicle: any) => {
    const [rows] = await pool.execute('UPDATE autos SET pago = "PAGADO" WHERE patente = ?', [vehicle.patente])
    return rows
}