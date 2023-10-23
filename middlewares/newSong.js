// add new song to db
const newSong = (repo) => (req, res, next) => {
  if (
    typeof req.body.title === 'undefined' ||
    typeof req.body.artist_ids === 'undefined' ||
    typeof req.body.length === 'undefined' ||
    typeof req.body.release_date === 'undefined'
  ) {
    res.redirect(`/artist/new?error=invalid`);
  } else {
    let new_song = {
      _id: Math.trunc(Math.random() * 100_000).toString(),
      title: req.body.title,
      artists:
        req.body.artist_ids instanceof Array
          ? req.body.artist_ids
          : [req.body.artist_ids],
      length: parseInt(req.body.length),
      release_date: req.body.release_date,
    };

    repo.songs.push(new_song);

    res.redirect(`/artist/songs/${req.params.artist_id}`);
  }

  return next();
};

export default newSong;
