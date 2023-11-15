// search artist by name
const searchArtist = (repo) => async (req, res, next) => {
  const { Artist } = repo;

  let artists = await Artist.find({
    name: { $regex: req.query.q, $options: 'i' } ?? '',
  })
    .limit(10)
    .sort({
      name: 1,
    });

  res.json(artists);

  return next();
};

export default searchArtist;
