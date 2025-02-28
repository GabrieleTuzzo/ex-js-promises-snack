// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjasdfson.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => resolve(data.title))
            .catch((error) => reject(error));
    });
}

getPostTitle(1)
    .then((title) => console.log(title))
    .catch((error) => console.error(error));

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            if (Math.random() < 0.2) {
                // 20% chance
                reject('Dado incastrato');
            } else {
                resolve(randomNumber);
            }
        }, 3000);
    });
}

// lanciaDado()
//     .then((number) => console.log(number))
//     .catch((error) => console.error(error));
