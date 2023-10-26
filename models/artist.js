import db from '../config/db.js';
import { Schema } from 'mongoose';

const Artist = db.model('Artist', {
  name: String,
  nationality: String,
  monthly_listeners: Number,
  state: Number,
  _songs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Song',
    },
  ],
});

export default Artist;
