/*Snack 1
Creare un test che verifichi la seguente descrizione:

👉 "La funzione getInitials restituisce le iniziali di un nome completo."*/

function getInitials(stringa) {
    return stringa[0]
}

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Luca')).toBe('L')
})


/*Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug restituisce una stringa in lowercase."*/


function createSlug(stringa) {
    return stringa.toLowerCase()
}

test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('Ciao')).toBe('ciao')
    expect(createSlug('come StAI')).toBe('come stai')
})



/*Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."*/

function average(array) {
    const sum = array.reduce((acc, num) => acc + num, 0)
    return sum / array.length
}



test('La funzione average calcola la media aritmetica di un array di numeri', () => {
    expect(average([2, 4, 6, 8])).toBe(5)
})