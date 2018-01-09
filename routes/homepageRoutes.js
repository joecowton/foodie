module.exports = app => {
  app.get('/', function (req, res) {
    res.send('Wiki home page');
  })
}
