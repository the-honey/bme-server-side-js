// search artist by name
const searchArtist = (repo) => (req, res, next) => {
  res.json(
    repo.artists
      .filter((x) => x.name.toLowerCase().includes(req.query.q ?? ''))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 15)
  );
};

export default searchArtist;
