const jsonServer = require('json-server');
const https = require('https');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });

server.use(middlewares);
server.use(router);

const keyFile = path.join(__dirname, 'server.key');
const certFile = path.join(__dirname, 'server.cert');

https
	.createServer(
		{
			key: fs.readFileSync(keyFile),
			cert: fs.readFileSync(certFile),
		},
		server
	)
	.listen(3000, () => {
		console.log('JSON Server is running');
	});
