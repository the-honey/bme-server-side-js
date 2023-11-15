// deletes a single song from db
const deleteSong = (repo) => async (req, res, next) => {
  const { Song } = repo;

  await Song.findByIdAndDelete(req.params.song_id)
    .then((song) => {
      res.redirect(`/artist/songs/${req.params.artist_id}`);
    })
    .catch((err) => {
      res.redirect(`/artist/songs/${req.params.artist_id}?error=internal`);
    });

  return next();
};

export default deleteSong;
