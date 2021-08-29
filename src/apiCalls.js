const apiCalls = {
    getMovieData(url) {
        return fetch(url)
        .then(response => {
        if (!response.ok || response.status === 500) {
          throw Error('Error fetching movies')
        }
        return response.json()
      })
    }

}

export default apiCalls;
