import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';
import { green, blue, cyan } from 'chalk';
import Showdown from 'showdown';
const showdown = new Showdown.Converter();
showdown.setFlavor('github');
const topnav = readFileSync(join(__dirname, 'global', 'topnav.html'), 'utf-8');
const head = readFileSync(join(__dirname, 'global', 'head.html'), 'utf-8');
const breef = 'Malil general-purpose bot with Slash-Commands';

const compiler = new (class Compiler {
	scssdir: string;
	mddir: string;
	cssdir: string;
	htmldir: string;
	constructor({
		scss,
		md,
		css,
		html,
	}: {
		scss: string;
		md: string;
		css: string;
		html: string;
	}) {
		this.scssdir = scss;
		this.mddir = md;
		this.cssdir = css;
		this.htmldir = html;
	}
	async compileScss() {
		for (const file of readdirSync(this.scssdir).filter((file) =>
			file.endsWith('.scss')
		)) {
			console.time(cyan(file));
			const scss = join(this.scssdir, file);
			const css = join(this.cssdir, file.replace('.scss', '.css'));
			exec(`yarn sass ${scss} ${css}`);
			console.timeEnd(cyan(file));
		}
	}
	async compileTf() {
		for (const file of readdirSync(join(this.mddir)).filter((file) =>
			file.endsWith('md')
		)) {
			console.time(blue(file));
			const html = readFileSync(join(this.mddir, file), 'utf-8').split('{!')[0];
			const md = readFileSync(join(this.mddir, file), 'utf-8').split('{!')[1];
			const converted = showdown.makeHtml(md);
			const dir = join(this.htmldir, file.replace('.md', '.html'));

			const out = html
				.replace('{{input}}', converted)

				.replace('{{topnav}}', topnav)

				.replace('{{head}}', head)

				.replace('{{breef}}', breef)

				.replace('{{title}}', file.replace('.md', ''));

			writeFileSync(dir, out);
			console.timeEnd(blue(file));
		}
	}
	async compile() {
		this.compileScss();
		this.compileTf();
	}
})({
	scss: join(__dirname, 'scss'),
	md: join(__dirname, 'md'),
	css: join(__dirname, '..', 'public', 'css'),
	html: join(__dirname, '..'),
});
compiler.compile();
