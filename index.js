const http = require("http");
const fs = require("fs");
const { isUtf8 } = require("buffer");

const app = http.createServer((req, res) => {
  let { method, url } = req;
  console.log(method,url);
  if (method == "GET") {
    if (url == "/") {
      let data = fs.readFileSync("./public/home.html", "utf-8");
      res.writeHead(200,{"Content-Type":"text/html","msg":"high security web page"})
      res.write(data);
      res.end();
    }
    if(url=="/homecss"){
        let data = fs.readFileSync("./public/css/home.css","utf-8")
        res.writeHead(200,{"Content-Type":"text/css","msg":"high security web page"})
        res.write(data)
        res.end()
    }
    if(url=="/about"){
        let data = fs.readFileSync("./public/pages/about.html","utf-8")
        res.writeHead(200,{"Content-Type":"text/html","msg":"high security web page"})
        res.write(data)
        res.end()
    }
    if(url=="/aboutcss"){
        let data = fs.readFileSync("./public/css/about.css","utf-8")
        res.writeHead(200,{"Content-Type":"text/css","msg":"high security web page"})
        res.write(data)
        res.end()
    }
    if(url=="/contact"){
      let data = fs.readFileSync("./public/pages/contact.html","utf-8")
      res.writeHead(200,{"Content-Type":"text/html","msg":"high security web page"})
      res.write(data)
      res.end()
  }
  if(url=="/contactcss"){
      let data = fs.readFileSync("./public/css/contact.css","utf-8")
      res.writeHead(200,{"Content-Type":"text/css","msg":"high security web page"})
      res.write(data)
      res.end()
  }
   if(url=="/signup"){
      let data = fs.readFileSync("./public/pages/signup.html","utf-8")
      res.writeHead(200,{"Content-Type":"text/html","msg":"high security web page"})
      res.write(data)
      res.end()
  }
  if(url=="/signupcss"){
      let data = fs.readFileSync("./public/css/signup.css","utf-8")
      res.writeHead(200,{"Content-Type":"text/css","msg":"high security web page"})
      res.write(data)
      res.end()
  }
}
  else if(method=="POST"){
    if(url=="/newuser"){
      req.on("data",(data)=>{
        console.log(data.toString());
      })
      res.write(JSON.stringify({msg:"Data Recived"}))
      res.end()
    }
  }
});

app.listen(4000, () => {
  console.log("server started at http://localhost:4000");
});
