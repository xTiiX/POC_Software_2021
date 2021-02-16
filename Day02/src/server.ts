import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const server = express();
server.use(bodyParser.json());
server.use(cookieParser());

server.get('/hello', (req: Request, res: Response) => {
  res.send('world');
});

server.get('/repeat-my-query', (req: Request, res: any) => {
  const msg = req.query.message;
  if (msg) {
    res.send(msg);
  } else {
    res.send(400, 'Bad Request');
  }
});

server.get('/repeat-my-param/:message', (req: Request, res: any) => {
  const msg = req.params.message;
  res.send(msg);
});

server.post('/repeat-my-body', (req: Request, res: any) => {
  if (res.body.message) {
    res.send(res.body.message);
  } else {
    res.send(400, 'Bad Request');
  }
});

server.get('/repeat-my-header', (req: Request, res: any) => {
  if (res.header.message) {
    res.send(res.header.message);
  } else {
    res.send(400, 'Bad Request');
  }
});

server.get('/repeat-my-cookie', (req: Request, res: any) => {
  if (res.cookies.message) {
    res.send(res.cookies.message);
  } else {
    res.send(400, 'Bad Request');
  }
});

server.listen(8080);
