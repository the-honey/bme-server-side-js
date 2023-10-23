// deletes a single artist from db
const deleteArtist = (repo) => (req, res, next) => {
  repo.artists = repo.artists.filter((x) => x._id !== req.params.artist_id);
  repo.songs = repo.songs
    .map((x) => {
      return {
        ...x,
        artists: x.artists.filter((y) => y !== req.params.artist_id),
      };
    })
    .filter((x) => x.artists.length !== 0);
  res.redirect('/artist');

  return next();
};

export default deleteArtist;
