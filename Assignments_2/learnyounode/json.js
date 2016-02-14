var http = require('http')
  , map = require('through2-map')
  , url = require('url')
http.createServer(function(req, res) {
  var par = url.parse(req.url, true)
    , time = Date.parse(par.query.iso)
    , out = {}
  if (par.pathname === '/api/parsetime') {
    time = new Date(time)
    out = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  if (par.pathname === '/api/unixtime') {
    out = {unixtime: time}
  }
  res.end(JSON.stringify(out))
})
.listen(process.argv[2])