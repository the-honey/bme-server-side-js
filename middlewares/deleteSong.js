// deletes a single song from db
const deleteSong = (repo) => (req, res, next) => {
  repo.songs = repo.songs.filter((x) => x._id !== req.params.song_id);
  res.redirect(`/artist/songs/${req.params.artist_id}`);

  return next();
};

export default deleteSong;
