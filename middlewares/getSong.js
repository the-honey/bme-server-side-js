// get a single song and its data
const getSong = (repo) => (req, res, next) => {
  if (typeof req.params.song_id !== 'undefined') {
    let { artists, ...song } = repo.songs.find(
      (x) => x._id === req.params.song_id
    );
    song.artists = repo.artists.filter((x) => artists.includes(x._id));
    res.locals.song = song;
  }

  return next();
};

export default getSong;
