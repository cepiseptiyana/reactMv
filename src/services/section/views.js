export function dataApi(name) {
  return fetch("https://www.omdbapi.com/?apikey=61529aa0&s=" + name).then(
    (data) => data.json().catch((err) => "error : " + err)
  );
}

export function detailMovie(name) {
  return fetch("https://www.omdbapi.com/?apikey=61529aa0&i=" + name).then(
    (data) => data.json().catch((err) => "error : " + err)
  );
}
