// update a single song record in db
const editSong = (req, res, next) => {
  res.redirect(`/artist/songs/${req.params.artist_id}`);
};

export default editSong;
