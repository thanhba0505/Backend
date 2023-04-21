class NewsControllers {

  // [GET] /news
  index(req, res) {
    res.render('news')
  }

  show(req, res) {
    res.send('News Detall')
  }

}

module.exports = new NewsControllers

