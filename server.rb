require 'webrick'

srv = WEBrick::HTTPServer.new({
  DocumentRoot: "./",
  BindAddress: "127.0.0.1",
  Port: 8000
})


srv.mount('/', WEBrick::HTTPServlet::FileHandler, 'index.html')
srv.mount_proc('/r'){|req,res|
  r = "****** recieved request ******\n#{req}\n****** end ****\n"
  puts r
  res.body = "OK"
}

trap("INT"){ srv.shutdown }
srv.start
