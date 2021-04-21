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
            child_process_1.exec(`yarn sass --sourcemap=none ${scss} ${css}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnNlTWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLGlEQUFxQztBQUNyQyxpQ0FBMEM7QUFDMUMsd0RBQWdDO0FBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0UsTUFBTSxJQUFJLEdBQUcsaUJBQVksQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRSxNQUFNLEtBQUssR0FBRywrQ0FBK0MsQ0FBQztBQUU5RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxRQUFRO0lBS25DLFlBQVksRUFDWCxJQUFJLEVBQ0osRUFBRSxFQUNGLEdBQUcsRUFDSCxJQUFJLEdBTUo7UUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDaEIsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUN0QixFQUFFO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdELG9CQUFJLENBQUMsOEJBQThCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBQ0QsS0FBSyxDQUFDLFNBQVM7UUFDZCxLQUFLLE1BQU0sSUFBSSxJQUFJLGdCQUFXLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQ25CLEVBQUU7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sRUFBRSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEMsTUFBTSxHQUFHLEdBQUcsV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUU3RCxNQUFNLEdBQUcsR0FBRyxJQUFJO2lCQUNkLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO2lCQUUvQixPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztpQkFFN0IsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7aUJBRXpCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDO2lCQUUzQixPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFaEQsa0JBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1QjtJQUNGLENBQUM7SUFDRCxLQUFLLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsbUNBQW1DO1FBQ25DLGdHQUFnRztJQUNqRyxDQUFDO0NBQ0QsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO0lBQzdCLEVBQUUsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztJQUN6QixHQUFHLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztJQUMzQyxJQUFJLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7Q0FDM0IsQ0FBQyxDQUFDO0FBQ0gsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jLCByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7IGdyZWVuLCBibHVlLCBjeWFuIH0gZnJvbSAnY2hhbGsnO1xuaW1wb3J0IFNob3dkb3duIGZyb20gJ3Nob3dkb3duJztcbmNvbnN0IHNob3dkb3duID0gbmV3IFNob3dkb3duLkNvbnZlcnRlcigpO1xuc2hvd2Rvd24uc2V0Rmxhdm9yKCdnaXRodWInKTtcbmNvbnN0IHRvcG5hdiA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJ2dsb2JhbCcsICd0b3BuYXYuaHRtbCcpLCAndXRmLTgnKTtcbmNvbnN0IGhlYWQgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICdnbG9iYWwnLCAnaGVhZC5odG1sJyksICd1dGYtOCcpO1xuY29uc3QgYnJlZWYgPSAnTWFsaWwgZ2VuZXJhbC1wdXJwb3NlIGJvdCB3aXRoIFNsYXNoLUNvbW1hbmRzJztcblxuY29uc3QgY29tcGlsZXIgPSBuZXcgKGNsYXNzIENvbXBpbGVyIHtcblx0c2Nzc2Rpcjogc3RyaW5nO1xuXHRtZGRpcjogc3RyaW5nO1xuXHRjc3NkaXI6IHN0cmluZztcblx0aHRtbGRpcjogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0c2Nzcyxcblx0XHRtZCxcblx0XHRjc3MsXG5cdFx0aHRtbCxcblx0fToge1xuXHRcdHNjc3M6IHN0cmluZztcblx0XHRtZDogc3RyaW5nO1xuXHRcdGNzczogc3RyaW5nO1xuXHRcdGh0bWw6IHN0cmluZztcblx0fSkge1xuXHRcdHRoaXMuc2Nzc2RpciA9IHNjc3M7XG5cdFx0dGhpcy5tZGRpciA9IG1kO1xuXHRcdHRoaXMuY3NzZGlyID0gY3NzO1xuXHRcdHRoaXMuaHRtbGRpciA9IGh0bWw7XG5cdH1cblx0YXN5bmMgY29tcGlsZVNjc3MoKSB7XG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHJlYWRkaXJTeW5jKHRoaXMuc2Nzc2RpcikuZmlsdGVyKChmaWxlKSA9PlxuXHRcdFx0ZmlsZS5lbmRzV2l0aCgnLnNjc3MnKVxuXHRcdCkpIHtcblx0XHRcdGNvbnNvbGUudGltZShjeWFuKGZpbGUpKTtcblx0XHRcdGNvbnN0IHNjc3MgPSBqb2luKHRoaXMuc2Nzc2RpciwgZmlsZSk7XG5cdFx0XHRjb25zdCBjc3MgPSBqb2luKHRoaXMuY3NzZGlyLCBmaWxlLnJlcGxhY2UoJy5zY3NzJywgJy5jc3MnKSk7XG5cdFx0XHRleGVjKGB5YXJuIHNhc3MgLS1zb3VyY2VtYXA9bm9uZSAke3Njc3N9ICR7Y3NzfWApO1xuXHRcdFx0Y29uc29sZS50aW1lRW5kKGN5YW4oZmlsZSkpO1xuXHRcdH1cblx0fVxuXHRhc3luYyBjb21waWxlVGYoKSB7XG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHJlYWRkaXJTeW5jKGpvaW4odGhpcy5tZGRpcikpLmZpbHRlcigoZmlsZSkgPT5cblx0XHRcdGZpbGUuZW5kc1dpdGgoJ21kJylcblx0XHQpKSB7XG5cdFx0XHRjb25zb2xlLnRpbWUoYmx1ZShmaWxlKSk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVhZEZpbGVTeW5jKGpvaW4odGhpcy5tZGRpciwgZmlsZSksICd1dGYtOCcpLnNwbGl0KCd7IScpWzBdO1xuXHRcdFx0Y29uc3QgbWQgPSByZWFkRmlsZVN5bmMoam9pbih0aGlzLm1kZGlyLCBmaWxlKSwgJ3V0Zi04Jykuc3BsaXQoJ3shJylbMV07XG5cdFx0XHRjb25zdCBjb252ZXJ0ZWQgPSBzaG93ZG93bi5tYWtlSHRtbChtZCk7XG5cdFx0XHRjb25zdCBkaXIgPSBqb2luKHRoaXMuaHRtbGRpciwgZmlsZS5yZXBsYWNlKCcubWQnLCAnLmh0bWwnKSk7XG5cblx0XHRcdGNvbnN0IG91dCA9IGh0bWxcblx0XHRcdFx0LnJlcGxhY2UoJ3t7aW5wdXR9fScsIGNvbnZlcnRlZClcblxuXHRcdFx0XHQucmVwbGFjZSgne3t0b3BuYXZ9fScsIHRvcG5hdilcblxuXHRcdFx0XHQucmVwbGFjZSgne3toZWFkfX0nLCBoZWFkKVxuXG5cdFx0XHRcdC5yZXBsYWNlKCd7e2JyZWVmfX0nLCBicmVlZilcblxuXHRcdFx0XHQucmVwbGFjZSgne3t0aXRsZX19JywgZmlsZS5yZXBsYWNlKCcubWQnLCAnJykpO1xuXG5cdFx0XHR3cml0ZUZpbGVTeW5jKGRpciwgb3V0KTtcblx0XHRcdGNvbnNvbGUudGltZUVuZChibHVlKGZpbGUpKTtcblx0XHR9XG5cdH1cblx0YXN5bmMgY29tcGlsZSgpIHtcblx0XHR0aGlzLmNvbXBpbGVTY3NzKCk7XG5cdFx0dGhpcy5jb21waWxlVGYoKTtcblx0XHQvL2NvbnNvbGUudGltZShncmVlbihcIkZvcm1hdHRlZFwiKSk7XG5cdFx0Ly9leGVjKFwibnB4IHByZXR0aWVyLWVzbGludCAtLXdyaXRlIC4vcHVibGljLyoqLyoqXCIsICgpID0+IGNvbnNvbGUudGltZUVuZChncmVlbihcIkZvcm1hdHRlZFwiKSkpO1xuXHR9XG59KSh7XG5cdHNjc3M6IGpvaW4oX19kaXJuYW1lLCAnc2NzcycpLFxuXHRtZDogam9pbihfX2Rpcm5hbWUsICdtZCcpLFxuXHRjc3M6IGpvaW4oX19kaXJuYW1lLCAnLi4nLCAncHVibGljJywgJ2NzcycpLFxuXHRodG1sOiBqb2luKF9fZGlybmFtZSwgJy4uJyksXG59KTtcbmNvbXBpbGVyLmNvbXBpbGUoKTtcbiJdfQ==