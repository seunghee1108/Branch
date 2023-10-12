const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-Type" : "textttttttttttt/plain"});
  res.write("배고프다");
  res.end();
  // plain : 설명
  // 향마루를 설명
});

server.listen(3500, (err) => {
  // if(!err) {
  //   console.error('서버 안돌어감');
  // } else {
  //   console.log("3500 포트에 돌아감 http://localhost:3500");
  // }
});
