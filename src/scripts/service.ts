import { Service } from 'node-windows';
import path from 'path';

let svc = new Service({
	name: 'Novertise',
	description: 'Automatic linkvertise skipper',
	script: path.join(__dirname, 'index.js')
});

svc.on('install', () => {
	svc.start();
});

svc.install();
