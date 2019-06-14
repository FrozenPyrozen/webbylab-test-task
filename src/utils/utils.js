function getMovieKey(line) {
  const movieKey = line.split(":")[0];

  return movieKey.trim().toLowerCase();
}

function getMovieValue(line) {
  const movieValue = line.split(":")[1];

  return movieValue.trim();
}

function parseMovie(text) {
  const getMovieLines = text.split(/\n/);
  const movie = {};

  getMovieLines.forEach(line => {
    if (getMovieKey(line) === "release year") {
      movie.releaseYear = Number(getMovieValue(line));
      return;
    }

    if (getMovieKey(line) === "format") {
      movie.type = getMovieValue(line);
      return;
    }

    if (getMovieKey(line) === "stars") {
      const stars = getMovieValue(line)
        .split(",")
        .map(star => star.trim());
      movie.stars = stars;
      return;
    }

    movie[getMovieKey(line)] = getMovieValue(line);
  });

  return movie;
}

function parseText(text) {
  const emptyLineBetweenMovies = /\n\s*\n/;
  const linesOfMovies = text.split(emptyLineBetweenMovies);

  return linesOfMovies
    .filter(lineOfMovie => lineOfMovie.trim().length)
    .map(lineOfMovie => parseMovie(lineOfMovie));
}

function readFromFile(file) {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = ({ target }) => resolve(target.result);
    fileReader.onerror = () => reject(this);
    fileReader.readAsText(file);
  });
}

export default function movieParser(file) {
  return new Promise(resolve => {
    readFromFile(file).then(text => resolve(parseText(text)));
  });
}
