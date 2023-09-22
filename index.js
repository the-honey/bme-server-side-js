const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res, next) => {
  res.redirect('/artist/');
});
app.use('/', express.static('pages'));
app.use('/assets/', express.static('assets'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
