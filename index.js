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
  renderHtml,
} from './middlewares/index.js';

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use('/assets', express.static('assets/'));

app.get('/', (_, res) => {
  res.redirect('/artist');
});

app.get('/artist', getArtists, renderHtml('views/artist/artist.html'));
app.get('/artist/new', renderHtml('views/artist/edit.html'));
app.post('/artist/new', newArtist);
app.get(
  '/artist/edit/:artist_id',
  getArtist,
  renderHtml('views/artist/edit.html')
);
app.post('/artist/edit/:artist_id', editArtist);
app.get('/artist/delete/:artist_id', deleteArtist);

app.get('/artist/songs/:artist_id', getSongs, renderHtml('views/song/song.html'));
app.get('/song/new/:artist_id', getArtist, renderHtml('views/song/edit.html'));
app.post('/song/new/:artist_id', newSong);
app.get(
  '/song/edit/:artist_id/:song_id',
  getArtist,
  getSong,
  renderHtml('views/song/edit.html')
);
app.post('/song/edit/:artist_id/:song_id', editSong);
app.get('/song/delete/:artist_id/:song_id', deleteSong);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
