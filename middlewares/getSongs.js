// get songs from db
const getSongs = (repo) => (req, res, next) => {
  if (typeof req.params.artist_id !== 'undefined') {
    let songs = structuredClone(
      repo.songs.filter((x) => x.artists.includes(req.params.artist_id))
    );
    for (let song of songs) {
      song.artists = song.artists.map((x) =>
        repo.artists.find((y) => y._id === x)
      );
    }
    res.locals.songs = songs;
  }
  return next();
};

export default getSongs;
