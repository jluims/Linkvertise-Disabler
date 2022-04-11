import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();

app.use((req, res) => {
	if (req.path === '/') {
		res.send('<h1>No accessing directly, sorry!</h1>');
		return;
	}

	res.sendFile(path.resolve('web/bypassing.html'))
});

https
	.createServer(
		{
			key: fs.readFileSync('cert/cert.key'),
			cert: fs.readFileSync('cert/cert.crt')
		},
		app
	)
	.listen(443, () => {
		console.log('Listening on https://localhost');
	});