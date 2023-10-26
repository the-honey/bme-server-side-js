import db from '../config/db.js';
import { Schema } from 'mongoose';

const Song = db.model('Song', {
  title: String,
  length: String,
  release_date: Date,
  _artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist',
    },
  ],
});

export default Song;
