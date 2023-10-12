const newSong = (req, res, next) => {
  res.redirect(`/artist/songs/${req.params.artist_id}`);
};

export default newSong;
