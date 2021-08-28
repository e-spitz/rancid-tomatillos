const apiCalls = {
    getMovieData(url) {
        return fetch(url)
        .then(res => res.json())
        .catch((err) => console.log(err))
    },

    getSingleMovieData(url) {
        return fetch(url)
        .then(res => res.json())
        .catch((err) => console.log(err))
    }
}

export default apiCalls;
