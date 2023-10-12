import * as url from 'url';
import path from 'path';

const renderHtml = (filename) => (req, res, next) => {
  const dir = url.fileURLToPath(new URL('..', import.meta.url));
  res.sendFile(path.join(dir, filename));
};

export default renderHtml;
