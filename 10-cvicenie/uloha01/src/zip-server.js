const http = require("http");
const path = require("path");
const {createGzip} = require("zlib");
const fs = require("fs");

let dir = path.resolve( `${__dirname}` , `${process.argv[2]}`)

fs.mkdir(dir, { recursive: true }, (err) => {
  if (err) console.error('Error');
});

let server = http.createServer()

server.listen(9999, "localhost")
  .on("request", (req, res) => {

      let output = fs.createWriteStream(path.resolve(dir,req.headers['filename'])); 
      output.on("error", (err) =>{
      console.error({message: 'Error: ', error: err})
      res.statusMessage = "Server error"
      res.statusCode = 500;
      res.end();
      process.exit();
      
    })
 
    req.pipe(createGzip()).pipe(res);

    req.pipe(output);
    console.log("File saved!");

  });

