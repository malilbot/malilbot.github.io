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
            child_process_1.exec(`yarn sass ${scss} ${css}`);
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
        //console.time(green("Formatted"));
        //exec("npx prettier-eslint --write ./public/**/**", () => console.timeEnd(green("Formatted")));
    }
})({
    scss: path_1.join(__dirname, 'scss'),
    md: path_1.join(__dirname, 'md'),
    css: path_1.join(__dirname, '..', 'public', 'css'),
    html: path_1.join(__dirname, '..'),
});
compiler.compile();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnNlTWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLGlEQUFxQztBQUNyQyxpQ0FBMEM7QUFDMUMsd0RBQWdDO0FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0UsTUFBTSxJQUFJLEdBQUcsaUJBQVksQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRSxNQUFNLEtBQUssR0FBRywrQ0FBK0MsQ0FBQztBQUU5RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxRQUFRO0lBS25DLFlBQVksRUFDWCxJQUFJLEVBQ0osRUFBRSxFQUNGLEdBQUcsRUFDSCxJQUFJLEdBTUo7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDaEIsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN0QixFQUFFO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdELG9CQUFJLENBQUMsYUFBYSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0YsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTO1FBQ2QsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUNuQixFQUFFO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLEVBQUUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sR0FBRyxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFN0QsTUFBTSxHQUFHLEdBQUcsSUFBSTtpQkFDZCxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztpQkFFL0IsT0FBTyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7aUJBRTdCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2lCQUV6QixPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztpQkFFM0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhELGtCQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBQ0QsS0FBSyxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLG1DQUFtQztRQUNuQyxnR0FBZ0c7SUFDakcsQ0FBQztDQUNELENBQUMsQ0FBQztJQUNGLElBQUksRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztJQUM3QixFQUFFLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDekIsR0FBRyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDM0MsSUFBSSxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0NBQzNCLENBQUMsQ0FBQztBQUNILFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgeyBncmVlbiwgYmx1ZSwgY3lhbiB9IGZyb20gJ2NoYWxrJztcbmltcG9ydCBTaG93ZG93biBmcm9tICdzaG93ZG93bic7XG5jb25zdCBzaG93ZG93biA9IG5ldyBTaG93ZG93bi5Db252ZXJ0ZXIoKTtcbnNob3dkb3duLnNldEZsYXZvcignZ2l0aHViJyk7XG5jb25zdCB0b3BuYXYgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICdnbG9iYWwnLCAndG9wbmF2Lmh0bWwnKSwgJ3V0Zi04Jyk7XG5jb25zdCBoZWFkID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnZ2xvYmFsJywgJ2hlYWQuaHRtbCcpLCAndXRmLTgnKTtcbmNvbnN0IGJyZWVmID0gJ01hbGlsIGdlbmVyYWwtcHVycG9zZSBib3Qgd2l0aCBTbGFzaC1Db21tYW5kcyc7XG5cbmNvbnN0IGNvbXBpbGVyID0gbmV3IChjbGFzcyBDb21waWxlciB7XG5cdHNjc3NkaXI6IHN0cmluZztcblx0bWRkaXI6IHN0cmluZztcblx0Y3NzZGlyOiBzdHJpbmc7XG5cdGh0bWxkaXI6IHN0cmluZztcblx0Y29uc3RydWN0b3Ioe1xuXHRcdHNjc3MsXG5cdFx0bWQsXG5cdFx0Y3NzLFxuXHRcdGh0bWwsXG5cdH06IHtcblx0XHRzY3NzOiBzdHJpbmc7XG5cdFx0bWQ6IHN0cmluZztcblx0XHRjc3M6IHN0cmluZztcblx0XHRodG1sOiBzdHJpbmc7XG5cdH0pIHtcblx0XHR0aGlzLnNjc3NkaXIgPSBzY3NzO1xuXHRcdHRoaXMubWRkaXIgPSBtZDtcblx0XHR0aGlzLmNzc2RpciA9IGNzcztcblx0XHR0aGlzLmh0bWxkaXIgPSBodG1sO1xuXHR9XG5cdGFzeW5jIGNvbXBpbGVTY3NzKCkge1xuXHRcdGZvciAoY29uc3QgZmlsZSBvZiByZWFkZGlyU3luYyh0aGlzLnNjc3NkaXIpLmZpbHRlcigoZmlsZSkgPT5cblx0XHRcdGZpbGUuZW5kc1dpdGgoJy5zY3NzJylcblx0XHQpKSB7XG5cdFx0XHRjb25zb2xlLnRpbWUoY3lhbihmaWxlKSk7XG5cdFx0XHRjb25zdCBzY3NzID0gam9pbih0aGlzLnNjc3NkaXIsIGZpbGUpO1xuXHRcdFx0Y29uc3QgY3NzID0gam9pbih0aGlzLmNzc2RpciwgZmlsZS5yZXBsYWNlKCcuc2NzcycsICcuY3NzJykpO1xuXHRcdFx0ZXhlYyhgeWFybiBzYXNzICR7c2Nzc30gJHtjc3N9YCk7XG5cdFx0XHRjb25zb2xlLnRpbWVFbmQoY3lhbihmaWxlKSk7XG5cdFx0fVxuXHR9XG5cdGFzeW5jIGNvbXBpbGVUZigpIHtcblx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgcmVhZGRpclN5bmMoam9pbih0aGlzLm1kZGlyKSkuZmlsdGVyKChmaWxlKSA9PlxuXHRcdFx0ZmlsZS5lbmRzV2l0aCgnbWQnKVxuXHRcdCkpIHtcblx0XHRcdGNvbnNvbGUudGltZShibHVlKGZpbGUpKTtcblx0XHRcdGNvbnN0IGh0bWwgPSByZWFkRmlsZVN5bmMoam9pbih0aGlzLm1kZGlyLCBmaWxlKSwgJ3V0Zi04Jykuc3BsaXQoJ3shJylbMF07XG5cdFx0XHRjb25zdCBtZCA9IHJlYWRGaWxlU3luYyhqb2luKHRoaXMubWRkaXIsIGZpbGUpLCAndXRmLTgnKS5zcGxpdCgneyEnKVsxXTtcblx0XHRcdGNvbnN0IGNvbnZlcnRlZCA9IHNob3dkb3duLm1ha2VIdG1sKG1kKTtcblx0XHRcdGNvbnN0IGRpciA9IGpvaW4odGhpcy5odG1sZGlyLCBmaWxlLnJlcGxhY2UoJy5tZCcsICcuaHRtbCcpKTtcblxuXHRcdFx0Y29uc3Qgb3V0ID0gaHRtbFxuXHRcdFx0XHQucmVwbGFjZSgne3tpbnB1dH19JywgY29udmVydGVkKVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e3RvcG5hdn19JywgdG9wbmF2KVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2hlYWR9fScsIGhlYWQpXG5cblx0XHRcdFx0LnJlcGxhY2UoJ3t7YnJlZWZ9fScsIGJyZWVmKVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e3RpdGxlfX0nLCBmaWxlLnJlcGxhY2UoJy5tZCcsICcnKSk7XG5cblx0XHRcdHdyaXRlRmlsZVN5bmMoZGlyLCBvdXQpO1xuXHRcdFx0Y29uc29sZS50aW1lRW5kKGJsdWUoZmlsZSkpO1xuXHRcdH1cblx0fVxuXHRhc3luYyBjb21waWxlKCkge1xuXHRcdHRoaXMuY29tcGlsZVNjc3MoKTtcblx0XHR0aGlzLmNvbXBpbGVUZigpO1xuXHRcdC8vY29uc29sZS50aW1lKGdyZWVuKFwiRm9ybWF0dGVkXCIpKTtcblx0XHQvL2V4ZWMoXCJucHggcHJldHRpZXItZXNsaW50IC0td3JpdGUgLi9wdWJsaWMvKiovKipcIiwgKCkgPT4gY29uc29sZS50aW1lRW5kKGdyZWVuKFwiRm9ybWF0dGVkXCIpKSk7XG5cdH1cbn0pKHtcblx0c2Nzczogam9pbihfX2Rpcm5hbWUsICdzY3NzJyksXG5cdG1kOiBqb2luKF9fZGlybmFtZSwgJ21kJyksXG5cdGNzczogam9pbihfX2Rpcm5hbWUsICcuLicsICdwdWJsaWMnLCAnY3NzJyksXG5cdGh0bWw6IGpvaW4oX19kaXJuYW1lLCAnLi4nKSxcbn0pO1xuY29tcGlsZXIuY29tcGlsZSgpO1xuIl19