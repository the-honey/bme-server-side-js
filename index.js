import express from 'express';
import {
  deleteArtist,
  deleteSong,
  editArtist,
  editSong,
  getArtist,
  getArtists,
  getSong,
  getSongs,
  newArtist,
  newSong,
  renderView,
  searchArtist,
} from './middlewares/index.js';
import { data } from './data.js';

const app = express();
const PORT = 3000;

let objRepo = data;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use('/assets', express.static('assets/'));

app.get('/', (_, res) => {
  res.redirect('/artist');
});

app.get('/artist', getArtists(objRepo), renderView(objRepo, 'artist/artist'));
app.get('/artist/new', renderView(objRepo, 'artist/edit'));
app.post('/artist/new', newArtist(objRepo));
app.get(
  '/artist/edit/:artist_id',
  getArtist(objRepo),
  renderView(objRepo, 'artist/edit')
);
app.post('/artist/edit/:artist_id', editArtist(objRepo));
app.get('/artist/delete/:artist_id', deleteArtist(objRepo));

app.get(
  '/artist/songs/:artist_id',
  getArtist(objRepo),
  getSongs(objRepo),
  renderView(objRepo, 'song/song')
);
app.get(
  '/song/new/:artist_id',
  getArtists(objRepo),
  getArtist(objRepo),
  renderView(objRepo, 'song/edit')
);
app.post('/song/new/:artist_id', newSong(objRepo));
app.get(
  '/song/edit/:artist_id/:song_id',
  getArtist(objRepo),
  getArtists(objRepo),
  getSong(objRepo),
  renderView(objRepo, 'song/edit')
);
app.post('/song/edit/:artist_id/:song_id', editSong(objRepo));
app.get('/song/delete/:artist_id/:song_id', deleteSong(objRepo));

app.get('/artist/search', searchArtist(objRepo));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
