export const genPatente = () => {
    const r = (x: number) => ~~(Math.random() * x);
    const l = (x?: string) => [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][r(26)];

    return l() + l() + r(10) + r(10) + r(10) + r(10);
};

export const genColor = () => {
    var colores = ['Negro', 'Azul', 'Verde', 'Rojo', 'Amarillo', 'Blanco', 'Rojo Rubí', 'Negro Carbón', 'Blanco Perla', 'Azul Marino', 'Plateado Metálico', 'Gris Titanio', 'Verde Esmeralda', 'Amarillo Mostaza', 'Marrón Chocolate', 'Naranja Mandarina'];
    var indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

export const genMarca = () => {
    const marcas = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Kia'];
    var indice = Math.floor(Math.random() * marcas.length);
    return marcas[indice];
}

export const genTipo = () => {
    const tipos = ['Sedán', 'SUV', 'Pick-up', 'Hatchback', 'Coupé', 'Convertible', 'Camioneta', 'Deportivo', 'Minivan']
    var indice = Math.floor(Math.random() * tipos.length);
    return tipos[indice];
}