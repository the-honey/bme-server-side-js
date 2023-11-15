// get artists from db
const getArtists = (repo) => async (req, res, next) => {
  const { Artist } = repo;

  await Artist.find()
    .then((artists) => {
      res.locals.artists = artists;
    })
    .catch((err) => {
      res.locals.artists = [];
    });

  return next();
};

export default getArtists;
