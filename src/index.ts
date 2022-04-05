import express from 'express';
import https from 'https';
import fs from 'fs';

const app = express();

app.use((req, res) => {
	if (req.path === '/') {
		res.send('<h1>No accessing directly, sorry!</h1>');
		return;
	}

	// I don't have the willpower to bypass linkvertise myself
	// so I may as well use an api!
	res.send(`
		<h1>Bypassing...</h1>
		<script>
		fetch('https://api.bypass.vip/', {
				method: 'POST',
				headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
				},
				body: 'url=${'https://linkvertise.com' + req.path}'
				}).then(res => {res.json().then(json => {
					if (json.destination == null) {
						alert('Failed to bypass link');
						return;
					}
					location.href = json.destination;
				})});
		</script>
		`);
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