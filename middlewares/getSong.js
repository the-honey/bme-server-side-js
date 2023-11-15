// get a single song and its data
const getSong = (repo) => async (req, res, next) => {
  if (typeof req.params.song_id !== 'undefined') {
    const { Song } = repo;

    await Song.findById(req.params.song_id)
      .populate('_artists')
      .then((song) => {
        res.locals.song = song;
      })
      .catch((err) => {
        res.locals.song = null;
      });
  }

  return next();
};

export default getSong;
