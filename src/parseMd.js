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
    }
})({
    scss: path_1.join(__dirname, 'scss'),
    md: path_1.join(__dirname, 'md'),
    css: path_1.join(__dirname, '..', 'public', 'css'),
    html: path_1.join(__dirname, '..'),
});
compiler.compile();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnNlTWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLGlEQUFxQztBQUNyQyxpQ0FBMEM7QUFDMUMsd0RBQWdDO0FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0UsTUFBTSxJQUFJLEdBQUcsaUJBQVksQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRSxNQUFNLEtBQUssR0FBRywrQ0FBK0MsQ0FBQztBQUU5RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxRQUFRO0lBS25DLFlBQVksRUFDWCxJQUFJLEVBQ0osRUFBRSxFQUNGLEdBQUcsRUFDSCxJQUFJLEdBTUo7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDaEIsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN0QixFQUFFO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdELG9CQUFJLENBQUMsYUFBYSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVCO0lBQ0YsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTO1FBQ2QsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUNuQixFQUFFO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLEVBQUUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sR0FBRyxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFN0QsTUFBTSxHQUFHLEdBQUcsSUFBSTtpQkFDZCxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztpQkFFL0IsT0FBTyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7aUJBRTdCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2lCQUV6QixPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztpQkFFM0IsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhELGtCQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBQ0QsS0FBSyxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRCxDQUFDLENBQUM7SUFDRixJQUFJLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7SUFDN0IsRUFBRSxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBQ3pCLEdBQUcsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO0lBQzNDLElBQUksRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztDQUMzQixDQUFDLENBQUM7QUFDSCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgZ3JlZW4sIGJsdWUsIGN5YW4gfSBmcm9tICdjaGFsayc7XG5pbXBvcnQgU2hvd2Rvd24gZnJvbSAnc2hvd2Rvd24nO1xuY29uc3Qgc2hvd2Rvd24gPSBuZXcgU2hvd2Rvd24uQ29udmVydGVyKCk7XG5zaG93ZG93bi5zZXRGbGF2b3IoJ2dpdGh1YicpO1xuY29uc3QgdG9wbmF2ID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnZ2xvYmFsJywgJ3RvcG5hdi5odG1sJyksICd1dGYtOCcpO1xuY29uc3QgaGVhZCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJ2dsb2JhbCcsICdoZWFkLmh0bWwnKSwgJ3V0Zi04Jyk7XG5jb25zdCBicmVlZiA9ICdNYWxpbCBnZW5lcmFsLXB1cnBvc2UgYm90IHdpdGggU2xhc2gtQ29tbWFuZHMnO1xuXG5jb25zdCBjb21waWxlciA9IG5ldyAoY2xhc3MgQ29tcGlsZXIge1xuXHRzY3NzZGlyOiBzdHJpbmc7XG5cdG1kZGlyOiBzdHJpbmc7XG5cdGNzc2Rpcjogc3RyaW5nO1xuXHRodG1sZGlyOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRzY3NzLFxuXHRcdG1kLFxuXHRcdGNzcyxcblx0XHRodG1sLFxuXHR9OiB7XG5cdFx0c2Nzczogc3RyaW5nO1xuXHRcdG1kOiBzdHJpbmc7XG5cdFx0Y3NzOiBzdHJpbmc7XG5cdFx0aHRtbDogc3RyaW5nO1xuXHR9KSB7XG5cdFx0dGhpcy5zY3NzZGlyID0gc2Nzcztcblx0XHR0aGlzLm1kZGlyID0gbWQ7XG5cdFx0dGhpcy5jc3NkaXIgPSBjc3M7XG5cdFx0dGhpcy5odG1sZGlyID0gaHRtbDtcblx0fVxuXHRhc3luYyBjb21waWxlU2NzcygpIHtcblx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgcmVhZGRpclN5bmModGhpcy5zY3NzZGlyKS5maWx0ZXIoKGZpbGUpID0+XG5cdFx0XHRmaWxlLmVuZHNXaXRoKCcuc2NzcycpXG5cdFx0KSkge1xuXHRcdFx0Y29uc29sZS50aW1lKGN5YW4oZmlsZSkpO1xuXHRcdFx0Y29uc3Qgc2NzcyA9IGpvaW4odGhpcy5zY3NzZGlyLCBmaWxlKTtcblx0XHRcdGNvbnN0IGNzcyA9IGpvaW4odGhpcy5jc3NkaXIsIGZpbGUucmVwbGFjZSgnLnNjc3MnLCAnLmNzcycpKTtcblx0XHRcdGV4ZWMoYHlhcm4gc2FzcyAke3Njc3N9ICR7Y3NzfWApO1xuXHRcdFx0Y29uc29sZS50aW1lRW5kKGN5YW4oZmlsZSkpO1xuXHRcdH1cblx0fVxuXHRhc3luYyBjb21waWxlVGYoKSB7XG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHJlYWRkaXJTeW5jKGpvaW4odGhpcy5tZGRpcikpLmZpbHRlcigoZmlsZSkgPT5cblx0XHRcdGZpbGUuZW5kc1dpdGgoJ21kJylcblx0XHQpKSB7XG5cdFx0XHRjb25zb2xlLnRpbWUoYmx1ZShmaWxlKSk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVhZEZpbGVTeW5jKGpvaW4odGhpcy5tZGRpciwgZmlsZSksICd1dGYtOCcpLnNwbGl0KCd7IScpWzBdO1xuXHRcdFx0Y29uc3QgbWQgPSByZWFkRmlsZVN5bmMoam9pbih0aGlzLm1kZGlyLCBmaWxlKSwgJ3V0Zi04Jykuc3BsaXQoJ3shJylbMV07XG5cdFx0XHRjb25zdCBjb252ZXJ0ZWQgPSBzaG93ZG93bi5tYWtlSHRtbChtZCk7XG5cdFx0XHRjb25zdCBkaXIgPSBqb2luKHRoaXMuaHRtbGRpciwgZmlsZS5yZXBsYWNlKCcubWQnLCAnLmh0bWwnKSk7XG5cblx0XHRcdGNvbnN0IG91dCA9IGh0bWxcblx0XHRcdFx0LnJlcGxhY2UoJ3t7aW5wdXR9fScsIGNvbnZlcnRlZClcblxuXHRcdFx0XHQucmVwbGFjZSgne3t0b3BuYXZ9fScsIHRvcG5hdilcblxuXHRcdFx0XHQucmVwbGFjZSgne3toZWFkfX0nLCBoZWFkKVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2JyZWVmfX0nLCBicmVlZilcblxuXHRcdFx0XHQucmVwbGFjZSgne3t0aXRsZX19JywgZmlsZS5yZXBsYWNlKCcubWQnLCAnJykpO1xuXG5cdFx0XHR3cml0ZUZpbGVTeW5jKGRpciwgb3V0KTtcblx0XHRcdGNvbnNvbGUudGltZUVuZChibHVlKGZpbGUpKTtcblx0XHR9XG5cdH1cblx0YXN5bmMgY29tcGlsZSgpIHtcblx0XHR0aGlzLmNvbXBpbGVTY3NzKCk7XG5cdFx0dGhpcy5jb21waWxlVGYoKTtcblx0fVxufSkoe1xuXHRzY3NzOiBqb2luKF9fZGlybmFtZSwgJ3Njc3MnKSxcblx0bWQ6IGpvaW4oX19kaXJuYW1lLCAnbWQnKSxcblx0Y3NzOiBqb2luKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycsICdjc3MnKSxcblx0aHRtbDogam9pbihfX2Rpcm5hbWUsICcuLicpLFxufSk7XG5jb21waWxlci5jb21waWxlKCk7XG4iXX0=