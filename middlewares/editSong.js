// update a single song record in db
const editSong = (repo) => (req, res, next) => {
  if (
    typeof req.body.title === 'undefined' ||
    typeof req.body.artist_ids === 'undefined' ||
    typeof req.body.length === 'undefined' ||
    typeof req.body.release_date === 'undefined'
  ) {
    res.redirect(
      `/song/edit/${req.params.artist_id}/${req.params.song_id}?error=invalid`
    );
  } else {
    let song = repo.songs.find((x) => x._id === req.params.song_id);

    song.title = req.body.title;
    song.artists =
      req.body.artist_ids instanceof Array
        ? req.body.artist_ids
        : [req.body.artist_ids];
    song.length = parseInt(req.body.length);
    song.release_date = req.body.release_date;

    res.redirect(`/artist/songs/${req.params.artist_id}`);
  }

  return next();
};

export default editSong;
