const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.redirect('/artist/');
});

app.get('/artist/', renderHtml('public/artist/index.html'));
app.use('/artist/new', renderHtml('public/artist/edit/index.html'));
app.get('/artist/edit/:artist_id', renderHtml('public/artist/edit/index.html'));
app.post(
  '/artist/edit/:artist_id',
  (req, res, next) => {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
      res.redirect('/artist/');
      return;
    }
    return next();
  },
  renderHtml('public/artist/index.html')
);
app.get('/artist/delete/:artist_id', (req, res) => res.redirect('/artist/'));

app.get('/song/:artist_id', renderHtml('public/song/index.html'));
app.get('/song/:artist_id/new', renderHtml('public/song/edit/index.html'));
app.post(
  '/song/edit/:artist_id/:song_id',
  (req, res, next) => {
    if (typeof req.body !== 'undefined') {
      console.log(req.body);
      res.redirect(`/song/1`);
      return;
    }
    return next();
  },
  renderHtml('public/song/edit/index.html')
);
app.get(
  '/song/edit/:artist_id/:song_id',
  renderHtml('public/song/edit/index.html')
);

app.get('/song/delete/:artist_id/:song_id', (req, res) =>
  res.redirect(`/song/1`)
);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);

const renderHtml = (filename) => {
  (req, res, next) => {
    res.sendFile(path.join(__dirname, filename));
  };
};
