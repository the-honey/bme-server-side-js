// Import necessary libraries
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { editSong } from '../../../middlewares/index.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('editSong middleware', function () {
  let req, res, next, Song;

  beforeEach(function () {
    // Mock request object
    req = {
      body: {
        title: 'Test Title',
        artist_ids: ['123'],
        length: 3000,
        release_date: '2022-01-01',
      },
      params: {
        artist_id: '123',
        song_id: '456',
      },
    };

    // Mock response object
    res = {
      redirect: sinon.spy(),
    };

    // Mock next function
    next = sinon.spy();

    // Mock Song model
    Song = {
      findByIdAndUpdate: sinon.stub().resolves(),
    };
  });

  it('should update a song and redirect to artist songs page', async function () {
    await editSong({ Song })(req, res, next);
    expect(Song.findByIdAndUpdate.calledOnce).to.be.true;
    expect(res.redirect.calledWith(`/artist/songs/${req.params.artist_id}`)).to
      .be.true;
    expect(next.calledOnce).to.be.true;
  });

  it('should redirect to error page if input is invalid', async function () {
    req.body.title = undefined;
    await editSong({ Song })(req, res, next);
    expect(
      res.redirect.calledWith(
        `/song/edit/${req.params.artist_id}/${req.params.song_id}?error=invalid_input`
      )
    ).to.be.true;
  });

  it('should redirect to error page if database operation fails', async function () {
    Song.findByIdAndUpdate.rejects();
    await editSong({ Song })(req, res, next);
    expect(
      res.redirect.calledWith(
        `/song/edit/${req.params.artist_id}/${req.params.song_id}?error=internal`
      )
    ).to.be.true;
  });
});
