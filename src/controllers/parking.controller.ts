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

export const getVehicle = async (patente: string) => {
    const [rows] = await pool.execute('SELECT * FROM autos WHERE patente = ?', [patente])
    return rows
}

export const createVehicle = async (vehicle: any) => {
    const [rows] = await pool.execute('INSERT INTO autos (PATENTE, COLOR, MARCA, TIPO, SLOT) VALUES (?, ?, ?, ?, ?)', [vehicle.patente, vehicle.color, vehicle.marca, vehicle.tipo, vehicle.slot])
    return rows
}

export const updateVehicle = async (vehicle: any) => {
    const [rows] = await pool.execute('UPDATE autos SET slot = 0, pago = "PAGADO" WHERE patente = ?', [vehicle.patente])
    return rows
}

// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     patente VARCHAR(6) UNIQUE NOT NULL,
//     color VARCHAR(255),
//     marca VARCHAR(50),
//     tipo VARCHAR(50),
//     pago ENUM ("PENDIENTE", "PAGADO") DEFAULT "PENDIENTE",
//     slot TINYINT,
//     fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
//     fecha_modificacion  DATETIME ON UPDATE CURRENT_TIMESTAMP
