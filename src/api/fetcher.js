async function fetcher(url) {
  return await fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log(err.message)
    })
}

export {
  fetcher
}
