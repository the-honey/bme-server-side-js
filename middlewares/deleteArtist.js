// deletes a single artist from db
const deleteArtist = (repo) => async (req, res, next) => {
  const { Artist, Song } = repo;

  await Artist.findByIdAndDelete(req.params.artist_id)
    .then(async (artist) => {
      await Song.updateMany(
        { _artists: req.params.artist_id },
        { $pull: { _artists: req.params.artist_id } }
      );

      await Song.deleteMany({ _artists: { $size: 0 } });

      res.redirect('/artist');
    })
    .catch((err) => {
      res.redirect('/artist?error=internal');
    });

  return next();
};

export default deleteArtist;
