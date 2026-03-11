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


function firstCreateSlug(stringa) {
    return stringa.toLowerCase()
}


test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(firstCreateSlug('Ciao')).toBe('ciao')
    expect(firstCreateSlug('come StAI')).toBe('come stai')
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



/*Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug sostituisce gli spazi con -."


📌 Esempi:

createSlug("Questo è un test") → "questo-e-un-test"*/

function SecondCreateSlug(stringa) {
    return stringa.replaceAll(' ', '-')
}


test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(SecondCreateSlug('questo é un test')).toBe('questo-é-un-test')
})



/*Creare un test che verifichi la seguente descrizione:

👉 "La funzione isPalindrome verifica se una stringa è un palindromo."



📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.*/


function isPalindrome(palindromeword) {

    let inversePalindromeWord = palindromeword.split('').reverse().join('')
    if (inversePalindromeWord === palindromeword) {
        return true
    }
}



test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome("ciao")).toBeFalsy()
    expect(isPalindrome('angelalavalalegna')).toBeTruthy()
})


/*Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."*/

function thirdCreateSlug(title) {
    if (title === '') {
        throw new Error('titolo non valido')
    }
}




test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => thirdCreateSlug('')).toThrow()
})


/*Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"*/


function findPostById(posts, id) {
    return posts.find(post => post.id === id)
}

const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" }
];




test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Secondo post", slug: "secondo-post" })
})