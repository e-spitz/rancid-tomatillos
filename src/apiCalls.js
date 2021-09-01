const apiCalls = {
    async getMovieData() {
      //   return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
      //   .then(response => {
      //   if (!response.ok || response.status === 500) {
      //     throw Error('Error fetching movies')
      //   }
      //   return response.json()
      // })

      try {
        const response = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
        if (!response.ok || response.status === 500) {
          throw Error('Error fetching movies')
        }
        const data = await response.json()
        console.log(data)
        return data
      } catch(err) {
        console.log(err.message)
        return err;
      }
    },
    getMovieInfo(id) {
      return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
      if (!response.ok || response.status === 500) {
        throw Error('Error fetching movies')
      }
      return response.json()
    })
  },
  async getMovieTrailer(id) {
    const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`);
    if (!response.ok || response.status === 500) {
      throw Error('Error fetching movies');
    }
    return await response.json();
}

}

export default apiCalls;
