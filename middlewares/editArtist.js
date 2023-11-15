// update a single artist record in db
const editArtist = (repo) => async (req, res, next) => {
  if (
    typeof req.body.name === 'undefined' ||
    typeof req.body.nationality === 'undefined' ||
    typeof req.body.monthly_listeners === 'undefined'
  ) {
    res.redirect(`/artist/edit/${req.params.artist_id}?error=invalid_input`);
  } else {
    const { Artist } = repo;

    await Artist.findByIdAndUpdate(req.params.artist_id, {
      name: req.body.name,
      nationality: req.body.nationality,
      monthly_listeners: req.body.monthly_listeners,
    })
      .then((artist) => {
        res.redirect(`/artist`);
      })
      .catch((err) => {
        res.redirect(`/artist/edit/${req.params.artist_id}?error=internal`);
      });
  }

  return next();
};

export default editArtist;
