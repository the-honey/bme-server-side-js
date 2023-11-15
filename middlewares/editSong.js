// update a single song record in db
const editSong = (repo) => async (req, res, next) => {
  if (
    typeof req.body.title === 'undefined' ||
    typeof req.body.artist_ids === 'undefined' ||
    typeof req.body.length === 'undefined' ||
    typeof req.body.release_date === 'undefined'
  ) {
    res.status(400);
    res.redirect(
      `/song/edit/${req.params.artist_id}/${req.params.song_id}?error=invalid_input`
    );
  } else {
    const { Song } = repo;

    await Song.findByIdAndUpdate(req.params.song_id, {
      title: req.body.title,
      length: req.body.length,
      release_date: req.body.release_date,
      _artists: req.body.artist_ids,
    })
      .then((song) => {
        res.redirect(`/artist/songs/${req.params.artist_id}`);
      })
      .catch((err) => {
        res.status(500);
        res.redirect(
          `/song/edit/${req.params.artist_id}/${req.params.song_id}?error=internal`
        );
      });
  }

  return next();
};

export default editSong;
