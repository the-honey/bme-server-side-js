import * as url from 'url';
import path from 'path';

// serves the html file
const renderHtml = (filename) => (req, res, next) => {
  const dir = url.fileURLToPath(new URL('../views/', import.meta.url));
  res.sendFile(path.join(dir, filename));
};

export default renderHtml;
