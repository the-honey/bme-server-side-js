import db from '../config/db.js';

const Artist = db.model('Artist', {
  name: String,
  nationality: String,
  monthly_listeners: Number,
});

export default Artist;
