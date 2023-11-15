// add new song to db
const newSong = (repo) => async (req, res, next) => {
  if (
    typeof req.body.title === 'undefined' ||
    typeof req.body.artist_ids === 'undefined' ||
    typeof req.body.length === 'undefined' ||
    typeof req.body.release_date === 'undefined'
  ) {
    res.redirect(`/artist/new?error=invalid_input`);
  } else {
    const { Song } = repo;

    await Song.create({
      title: req.body.title,
      length: parseInt(req.body.length),
      release_date: req.body.release_date,
      _artists:
        req.body.artist_ids instanceof Array
          ? req.body.artist_ids
          : [req.body.artist_ids],
    })
      .then((song) => {
        res.redirect(`/artist/songs/${req.params.artist_id}`);
      })
      .catch((err) => {
        res.redirect(`/artist/new?error=internal`);
      });
  }

  return next();
};

export default newSong;
