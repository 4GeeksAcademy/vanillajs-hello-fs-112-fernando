export function getRandomBetween(min, max){
    return Math.floor(Math.random() * max) + min;
}

/**
 * Devuelve un entero válido aleatorio dentro de la longitud del array por parámetro
 * @param {Array} array 
 * @returns index
 */
export function getRandomIndex(array) {
    return getRandomBetween(0, array.length)
}