// get artists from db
const getArtists = (repo) => (req, res, next) => {
  res.locals.artists = repo.artists;

  return next();
};

export default getArtists;
