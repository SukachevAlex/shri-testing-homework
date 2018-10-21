const { gitFileContent, gitFileTree } = require('../utils/git');
const { generateContent } = require('../utils/generateData');

module.exports = function(req, res, next) {
  const { hash } = req.params;
  const path = req.params[0].split('/').filter(Boolean);

  gitFileTree(hash, path.join('/'))
    .then(function([file]) {
      if (file && file.type === 'blob') {
        return gitFileContent(file.hash);
      }
    })
    .then(
      content => {
        if (content) {
          res.render('content', generateContent(hash, path, content));
        } else {
          next();
        }
      },
      err => next(err)
    );
};
