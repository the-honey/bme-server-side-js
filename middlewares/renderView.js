// renders ejs view
const renderView = (repo, view) => (req, res, next) => {
  res.render(view, res.locals);
};

export default renderView;
