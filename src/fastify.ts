import Fastify from 'fastify';
const fastify = Fastify({ logger: false });
import { readFileSync } from 'fs';
import { join } from 'path';
import { green } from 'chalk';
import './parseMd';
const port = 3000;
fastify.register(import('fastify-static'), {
	root: join(__dirname, '..'),
});
fastify.get('/', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'index.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/privacy', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'privacy.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/commands', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'commands.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/tos', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'tos.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/socials', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'socials.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/credits', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'credit.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/patchnotes', (req, res) => {
	const bufferIndexHtml = readFileSync(
		join(__dirname, '..', 'patchnotes.html')
	);
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/info', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'info.html'));
	res.type('text/html').send(bufferIndexHtml);
});
console.time(green(`http://localhost:${port} `));
fastify.listen(port, '0.0.0.0', () =>
	console.timeEnd(green(`http://localhost:${port} `))
);
