import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
	console.log('JSON Server is running');
});
