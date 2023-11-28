import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { newArtist } from '../../../middlewares/index.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('newArtist middleware', function () {
  let req, res, next, Artist;

  beforeEach(function () {
    req = {
      body: {
        name: 'Test Artist',
        nationality: 'Test Nationality',
        monthly_listeners: 1000,
      },
    };

    res = {
      redirect: sinon.spy(),
    };

    next = sinon.spy();

    Artist = {
      create: sinon.stub().resolves(),
    };
  });

  it('should create a new artist and redirect to artist page', async function () {
    await newArtist({ Artist })(req, res, next);
    expect(Artist.create.calledOnce).to.be.true;
    expect(res.redirect.calledWith(`/artist`)).to.be.true;
    expect(next.calledOnce).to.be.true;
  });

  it('should redirect to error page if input is invalid', async function () {
    req.body.name = undefined;
    await newArtist({ Artist })(req, res, next);
    expect(res.redirect.calledWith(`/artist/new?error=invalid_input`)).to.be
      .true;
  });

  it('should redirect to error page if database operation fails', async function () {
    Artist.create.rejects();
    await newArtist({ Artist })(req, res, next);
    expect(res.redirect.calledWith(`/artist/new?error=internal`)).to.be.true;
  });
});
