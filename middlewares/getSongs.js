// get songs from db
const getSongs = (repo) => async (req, res, next) => {
  if (typeof req.params.artist_id !== 'undefined') {
    const { Song } = repo;

    await Song.find({ _artists: req.params.artist_id })
      .populate('_artists')
      .then((songs) => {
        res.locals.songs = songs;
      })
      .catch((err) => {
        res.locals.songs = [];
      });
  }
  return next();
};

export default getSongs;
