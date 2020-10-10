const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');

const handle = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    res
      .status(INTERNAL_SERVER_ERROR)
      .send(getStatusText(INTERNAL_SERVER_ERROR));
  }
  next();
};

module.exports = handle;
