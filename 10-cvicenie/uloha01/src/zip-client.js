
const fs = require("fs");
const http = require("http");
const path = require("path");
const {createGunzip } = require("zlib");


let url = "http://localhost:9999";

let file = process.argv[2]

let p = path.resolve(__dirname,file)

let request = http.request(url, {
    method: "POST"
  })
  .on("response", (res) => {
    // po obdrzani file odzipuje a vypise 
    res.pipe(createGunzip()).pipe(process.stdout);
  }); 
  
request.setHeader('filename', file)
  
fs.createReadStream(p, {encoding:"utf8"}).pipe(request)
