"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const child_process_1 = require("child_process");
const chalk_1 = require("chalk");
const showdown_1 = __importDefault(require("showdown"));
const showdown = new showdown_1.default.Converter();
showdown.setFlavor('github');
const topnav = fs_1.readFileSync(path_1.join(__dirname, 'global', 'topnav.html'), 'utf-8');
const head = fs_1.readFileSync(path_1.join(__dirname, 'global', 'head.html'), 'utf-8');
const breef = 'Malil general-purpose bot with Slash-Commands';
const compiler = new (class Compiler {
    constructor({ scss, md, css, html, }) {
        this.scssdir = scss;
        this.mddir = md;
        this.cssdir = css;
        this.htmldir = html;
    }
    async compileScss() {
        for (const file of fs_1.readdirSync(this.scssdir).filter((file) => file.endsWith('.scss'))) {
            console.time(chalk_1.cyan(file));
            const scss = path_1.join(this.scssdir, file);
            const css = path_1.join(this.cssdir, file.replace('.scss', '.css'));
            child_process_1.exec(`yarn sass ${scss} ${css} --style compressed --no-source-map`, (e, a, c) => {
                console.log(e, a, c);
            });
            console.timeEnd(chalk_1.cyan(file));
        }
    }
    async compileTf() {
        for (const file of fs_1.readdirSync(path_1.join(this.mddir)).filter((file) => file.endsWith('md'))) {
            console.time(chalk_1.blue(file));
            const html = fs_1.readFileSync(path_1.join(this.mddir, file), 'utf-8').split('{!')[0];
            const md = fs_1.readFileSync(path_1.join(this.mddir, file), 'utf-8').split('{!')[1];
            const converted = showdown.makeHtml(md);
            const dir = path_1.join(this.htmldir, file.replace('.md', '.html'));
            const out = html
                .replace('{{input}}', converted)
                .replace('{{topnav}}', topnav)
                .replace('{{head}}', head)
                .replace('{{breef}}', breef)
                .replace('{{title}}', file.replace('.md', ''));
            fs_1.writeFileSync(dir, out);
            console.timeEnd(chalk_1.blue(file));
        }
    }
    async compile() {
        this.compileScss();
        this.compileTf();
    }
})({
    scss: path_1.join(__dirname, 'scss'),
    md: path_1.join(__dirname, 'md'),
    css: path_1.join(__dirname, '..', 'public', 'css'),
    html: path_1.join(__dirname, '..'),
});
compiler.compile();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnNlTWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLGlEQUFxQztBQUNyQyxpQ0FBMEM7QUFDMUMsd0RBQWdDO0FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0UsTUFBTSxJQUFJLEdBQUcsaUJBQVksQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRSxNQUFNLEtBQUssR0FBRywrQ0FBK0MsQ0FBQztBQUU5RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxRQUFRO0lBS25DLFlBQVksRUFDWCxJQUFJLEVBQ0osRUFBRSxFQUNGLEdBQUcsRUFDSCxJQUFJLEdBTUo7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDaEIsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN0QixFQUFFO1lBQ0YsT0FBTyxDQUFD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Q0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBncmVlbiwgYmx1ZSwgY3lhbiB9IGZyb20gJ2NoYWxrJztcbmltcG9ydCBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG5jb25zdCBzaG93ZG93biA9IG5ldyBTaG93ZG93bi5Db252ZXJ0ZXIoKTtcbnNob3dkb3duLnNldEZsYXZvcignZ2l0aHViJyk7XG5jb25zdCB0b3BuYXYgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICdnbG9iYWwnLCAndG9wbmF2Lmh0bWwnKSwgJ3V0Zi04Jyk7XG5jb25zdCBoZWFkID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnZ2xvYmFsJywgJ2hlYWQuaHRtbCcpLCAndXRmLTgnKTtcbmNvbnN0IGJyZWVmID0gJ01hbGlsIGdlbmVyYWwtcHVycG9zZSBib3Qgd2l0aCBTbGFzaC1Db21tYW5kcyc7XG5cbmNvbnN0IGNvbXBpbGVyID0gbmV3IChjbGFzcyBDb21waWxlciB7XG5cdHNjc3NkaXI6IHN0cmluZztcblx0bWRkaXI6IHN0cmluZztcblx0Y3NzZGlyOiBzdHJpbmc7XG5cdGh0bWxkaXI6IHN0cmluZztcblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNjc3MsXG5cdFx0bWQsXG5cdFx0Y3NzLFxuXHRcdGh0bWwsXG5cdH06IHtcblx0XHRzY3NzOiBzdHJpbmc7XG5cdFx0bWQ6IHN0cmluZztcblx0XHRjc3M6IHN0cmluZztcblx0XHRodG1sOiBzdHJpbmc7XG5cdH0pIHtcblx0XHR0aGlzLnNjc3NkaXIgPSBzY3NzO1xuXHRcdHRoaXMubWRkaXIgPSBtZDtcblx0XHR0aGlzLmNzc2RpciA9IGNzcztcblx0XHR0aGlzLmh0bWxkaXIgPSBodG1sO1xuXHR9XG5cdGFzeW5jIGNvbXBpbGVTY3NzKCkge1xuXHRcdGZvciAoY29uc3QgZmlsZSBvZiByZWFkZGlyU3luYyh0aGlzLnNjc3NkaXIpLmZpbHRlcigoZmlsZSkgPT5cblx0XHRcdGZpbGUuZW5kc1dpdGgoJy5zY3NzJylcblx0XHQpKSB7XG5cdFx0XHRjb25zb2xlLnRpbWUoY3lhbihmaWxlKSk7XG5cdFx0XHRjb25zdCBzY3NzID0gam9pbih0aGlzLnNjc3NkaXIsIGZpbGUpO1xuXHRcdFx0Y29uc3QgY3NzID0gam9pbih0aGlzLmNzc2RpciwgZmlsZS5yZXBsYWNlKCcuc2NzcycsICcuY3NzJykpO1xuXHRcdFx0ZXhlYyhcblx0XHRcdFx0YHlhcm4gc2FzcyAke3Njc3N9ICR7Y3NzfSAtLXN0eWxlIGNvbXByZXNzZWQgLS1uby1zb3VyY2UtbWFwYCxcblx0XHRcdFx0KGUsIGEsIGMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlLCBhLCBjKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdGNvbnNvbGUudGltZUVuZChjeWFuKGZpbGUpKTtcblx0XHR9XG5cdH1cblx0YXN5bmMgY29tcGlsZVRmKCkge1xuXHRcdGZvciAoY29uc3QgZmlsZSBvZiByZWFkZGlyU3luYyhqb2luKHRoaXMubWRkaXIpKS5maWx0ZXIoKGZpbGUpID0+XG5cdFx0XHRmaWxlLmVuZHNXaXRoKCdtZCcpXG5cdFx0KSkge1xuXHRcdFx0Y29uc29sZS50aW1lKGJsdWUoZmlsZSkpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKHRoaXMubWRkaXIsIGZpbGUpLCAndXRmLTgnKS5zcGxpdCgneyEnKVswXTtcblx0XHRcdGNvbnN0IG1kID0gcmVhZEZpbGVTeW5jKGpvaW4odGhpcy5tZGRpciwgZmlsZSksICd1dGYtOCcpLnNwbGl0KCd7IScpWzFdO1xuXHRcdFx0Y29uc3QgY29udmVydGVkID0gc2hvd2Rvd24ubWFrZUh0bWwobWQpO1xuXHRcdFx0Y29uc3QgZGlyID0gam9pbih0aGlzLmh0bWxkaXIsIGZpbGUucmVwbGFjZSgnLm1kJywgJy5odG1sJykpO1xuXG5cdFx0XHRjb25zdCBvdXQgPSBodG1sXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2lucHV0fX0nLCBjb252ZXJ0ZWQpXG5cblx0XHRcdFx0LnJlcGxhY2UoJ3t7dG9wbmF2fX0nLCB0b3BuYXYpXG5cblx0XHRcdFx0LnJlcGxhY2UoJ3t7aGVhZH19JywgaGVhZClcblxuXHRcdFx0XHQucmVwbGFjZSgne3ticmVlZn19JywgYnJlZWYpXG5cblx0XHRcdFx0LnJlcGxhY2UoJ3t7dGl0bGV9fScsIGZpbGUucmVwbGFjZSgnLm1kJywgJycpKTtcblxuXHRcdFx0d3JpdGVGaWxlU3luYyhkaXIsIG91dCk7XG5cdFx0XHRjb25zb2xlLnRpbWVFbmQoYmx1ZShmaWxlKSk7XG5cdFx0fVxuXHR9XG5cdGFzeW5jIGNvbXBpbGUoKSB7XG5cdFx0dGhpcy5jb21waWxlU2NzcygpO1xuXHRcdHRoaXMuY29tcGlsZVRmKCk7XG5cdH1cbn0pKHtcblx0c2Nzczogam9pbihfX2Rpcm5hbWUsICdzY3NzJyksXG5cdG1kOiBqb2luKF9fZGlybmFtZSwgJ21kJyksXG5cdGNzczogam9pbihfX2Rpcm5hbWUsICcuLicsICdwdWJsaWMnLCAnY3NzJyksXG5cdGh0bWw6IGpvaW4oX19kaXJuYW1lLCAnLi4nKSxcbn0pO1xuY29tcGlsZXIuY29tcGlsZSgpO1xuIl19