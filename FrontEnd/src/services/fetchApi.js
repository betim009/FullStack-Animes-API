const options = {
    method: 'GET',
    // headers: {
    //     'x-rapidapi-key': '3be01a29a9msh1147fa36f6934f8p13aa60jsn802d2dd1cc9f',
    //     'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    // },
    headers: {
        'x-rapidapi-key': '27bb0a1793msh18efee95ca561adp17c14ejsnb2b78c9d3300',
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
};


export async function fetchTopAnimes() {
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortOrder=asc';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        console.error(error);
    }
}

export async function fetchGenres() {
    const url = 'https://anime-db.p.rapidapi.com/genre';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        console.error(error);
    }
}

export async function fetchByGenre(genre) {
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=${genre}&sortBy=ranking&sortOrder=asc`

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        console.error(error);
    }
}