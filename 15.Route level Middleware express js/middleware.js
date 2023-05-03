module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send('Please Provide Your Age');
  } else if (req.query.age < 18) {
    resp.send('You are not eligible to access the page');
  } else {
    next();
  }
};
