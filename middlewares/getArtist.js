// get a single artist and its data
const getArtist = (repo) => (req, res, next) => {
  if (typeof req.params.artist_id !== 'undefined')
    res.locals.artist = repo.artists.find(
      (x) => x._id === req.params.artist_id
    );

  return next();
};

export default getArtist;
