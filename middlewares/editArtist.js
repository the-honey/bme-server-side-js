// update a single artist record in db
const editArtist = (repo) => (req, res, next) => {
  if (
    typeof req.body.name === 'undefined' ||
    typeof req.body.nationality === 'undefined' ||
    typeof req.body.monthly_listeners === 'undefined'
  ) {
    res.redirect(`/artist/edit/${req.params.artist_id}?error=invalid`);
  } else {
    let artist = repo.artists.find((x) => x._id === req.params.artist_id);

    artist.name = req.body.name;
    artist.nationality = req.body.nationality;
    artist.monthly_listeners = parseInt(req.body.monthly_listeners);

    res.redirect('/artist?error=invalid');
  }

  return next();
};

export default editArtist;
