"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = fastify_1.default({ logger: false });
const fs_1 = require("fs");
const path_1 = require("path");
const chalk_1 = require("chalk");
require("./parseMd");
const port = 3000;
fastify.register(Promise.resolve().then(() => __importStar(require('fastify-static'))), {
    root: path_1.join(__dirname, '..'),
});
fastify.get('/', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'index.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/invite', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'invite.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/support', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'support.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/privacy', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'privacy.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/commands', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'commands.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/tos', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'tos.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/socials', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'socials.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/credits', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'credit.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/list', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'list.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/patchnotes', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'patchnotes.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/info', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'info.html'));
    res.type('text/html').send(bufferIndexHtml);
});
console.time(chalk_1.green(`http://localhost:${port} `));
fastify.listen(port, '0.0.0.0', () => console.timeEnd(chalk_1.green(`http://localhost:${port} `)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdGlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMzQywyQkFBa0M7QUFDbEMsK0JBQTRCO0FBQzVCLGlDQUE4QjtBQUM5QixxQkFBbUI7QUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxRQUFRLG1EQUFRLGdCQUFnQixLQUFHO0lBQzFDLElBQUksRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztDQUMzQixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM3QixNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDMUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNuQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDM0UsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNwQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNwQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNyQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNoQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNwQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNwQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDM0UsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNqQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDekUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2QyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUNuQyxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUN4QyxDQUFDO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNqQyxNQUFNLGVBQWUsR0FBRyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDekUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxvQkFBb0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFLLENBQUMsb0JBQW9CLElBQUksR0FBRyxDQUFDLENBQUMsQ0FDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYXN0aWZ5IGZyb20gJ2Zhc3RpZnknO1xuY29uc3QgZmFzdGlmeSA9IEZhc3RpZnkoeyBsb2dnZXI6IGZhbHNlIH0pO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZ3JlZW4gfSBmcm9tICdjaGFsayc7XG5pbXBvcnQgJy4vcGFyc2VNZCc7XG5jb25zdCBwb3J0ID0gMzAwMDtcbmZhc3RpZnkucmVnaXN0ZXIoaW1wb3J0KCdmYXN0aWZ5LXN0YXRpYycpLCB7XG5cdHJvb3Q6IGpvaW4oX19kaXJuYW1lLCAnLi4nKSxcbn0pO1xuXG5mYXN0aWZ5LmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBidWZmZXJJbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLicsICdpbmRleC5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5cbmZhc3RpZnkuZ2V0KCcvaW52aXRlJywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ2ludml0ZS5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5cbmZhc3RpZnkuZ2V0KCcvc3VwcG9ydCcsIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBidWZmZXJJbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLicsICdzdXBwb3J0Lmh0bWwnKSk7XG5cdHJlcy50eXBlKCd0ZXh0L2h0bWwnKS5zZW5kKGJ1ZmZlckluZGV4SHRtbCk7XG59KTtcblxuZmFzdGlmeS5nZXQoJy9wcml2YWN5JywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ3ByaXZhY3kuaHRtbCcpKTtcblx0cmVzLnR5cGUoJ3RleHQvaHRtbCcpLnNlbmQoYnVmZmVySW5kZXhIdG1sKTtcbn0pO1xuZmFzdGlmeS5nZXQoJy9jb21tYW5kcycsIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBidWZmZXJJbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLicsICdjb21tYW5kcy5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL3RvcycsIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBidWZmZXJJbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLicsICd0b3MuaHRtbCcpKTtcblx0cmVzLnR5cGUoJ3RleHQvaHRtbCcpLnNlbmQoYnVmZmVySW5kZXhIdG1sKTtcbn0pO1xuZmFzdGlmeS5nZXQoJy9zb2NpYWxzJywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ3NvY2lhbHMuaHRtbCcpKTtcblx0cmVzLnR5cGUoJ3RleHQvaHRtbCcpLnNlbmQoYnVmZmVySW5kZXhIdG1sKTtcbn0pO1xuZmFzdGlmeS5nZXQoJy9jcmVkaXRzJywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ2NyZWRpdC5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL2xpc3QnLCAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYnVmZmVySW5kZXhIdG1sID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4nLCAnbGlzdC5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL3BhdGNobm90ZXMnLCAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYnVmZmVySW5kZXhIdG1sID0gcmVhZEZpbGVTeW5jKFxuXHRcdGpvaW4oX19kaXJuYW1lLCAnLi4nLCAncGF0Y2hub3Rlcy5odG1sJylcblx0KTtcblx0cmVzLnR5cGUoJ3RleHQvaHRtbCcpLnNlbmQoYnVmZmVySW5kZXhIdG1sKTtcbn0pO1xuZmFzdGlmeS5nZXQoJy9pbmZvJywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ2luZm8uaHRtbCcpKTtcblx0cmVzLnR5cGUoJ3RleHQvaHRtbCcpLnNlbmQoYnVmZmVySW5kZXhIdG1sKTtcbn0pO1xuXG5jb25zb2xlLnRpbWUoZ3JlZW4oYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fSBgKSk7XG5mYXN0aWZ5Lmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcsICgpID0+XG5cdGNvbnNvbGUudGltZUVuZChncmVlbihgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9IGApKVxuKTtcbiJdfQ==