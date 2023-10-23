// add new artist to db
const newArtist = (repo) => (req, res, next) => {
  if (
    typeof req.body.name === 'undefined' ||
    typeof req.body.nationality === 'undefined' ||
    typeof req.body.monthly_listeners === 'undefined'
  ) {
    res.redirect(`/artist/new?error=invalid`);
  } else {
    let new_artist = {
      _id: Math.trunc(Math.random() * 100_000).toString(),
      name: req.body.name,
      nationality: req.body.nationality,
      monthly_listeners: parseInt(req.body.monthly_listeners),
    };

    repo.artists.push(new_artist);

    res.redirect(`/artist`);
  }
  return next();
};

export default newArtist;
