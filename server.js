// 自定义服务器解决刷新页面不存在问题

const express = require('express');
const next = require('next');
const ip = require('ip').address();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 3567;


app.prepare()
   .then(() => {
      const server = express();

      server.get('*', (req, res) => {
         return handle(req, res);
      });

      server.listen(PORT, ip, err => {
         if (err) throw err;
         console.log(`> Ready on http://${ip}:${PORT}`);
      });
   })
   .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
   });
