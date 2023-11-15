// add new artist to db
const newArtist = (repo) => async (req, res, next) => {
  if (
    typeof req.body.name === 'undefined' ||
    typeof req.body.nationality === 'undefined' ||
    typeof req.body.monthly_listeners === 'undefined'
  ) {
    res.redirect(`/artist/new?error=invalid_input`);
  } else {
    const { Artist } = repo;

    await Artist.create({
      name: req.body.name,
      nationality: req.body.nationality,
      monthly_listeners: req.body.monthly_listeners,
    })
      .then((artist) => {
        res.redirect(`/artist`);
      })
      .catch((err) => {
        res.redirect(`/artist/new?error=internal`);
      });
  }
  return next();
};

export default newArtist;
