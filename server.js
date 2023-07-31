import jsonServer from 'json-server';
// import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });

// server.use(cors());
// server.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', '*');
// });

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
	console.log('JSON Server is running');
});
