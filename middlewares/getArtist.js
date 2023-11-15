// get a single artist and its data
const getArtist = (repo) => async (req, res, next) => {
  if (typeof req.params.artist_id !== 'undefined') {
    const { Artist } = repo;

    await Artist.findById(req.params.artist_id)
      .then((artist) => {
        res.locals.artist = artist;
      })
      .catch((err) => {
        res.locals.artist = null;
      });
  }

  return next();
};

export default getArtist;
