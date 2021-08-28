const apiCalls = {
    getMovieData(url) {
        return fetch(url)
        .then(response => {
        if (!response.ok) {
          throw Error('Error fetching movies')
        }
        return response.json()
      })
    }

    // getSingleMovieData(url) {
    //     return fetch(url)
    //     .then(res => res.json())
    //     .catch((err) => console.log(err))
    // }
}

export default apiCalls;
