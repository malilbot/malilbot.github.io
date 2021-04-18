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
require("./parseMd");
const port = 3000;
fastify.register(Promise.resolve().then(() => __importStar(require('fastify-static'))), {
    root: path_1.join(__dirname, '..'),
});
fastify.get('/', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'index.html'));
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
fastify.get('/patchnotes', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'patchnotes.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/info', (req, res) => {
    const bufferIndexHtml = fs_1.readFileSync(path_1.join(__dirname, '..', 'info.html'));
    res.type('text/html').send(bufferIndexHtml);
});
fastify.listen(port, '0.0.0.0', () => console.log('http://localhost:' + port));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzdGlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW1EO0FBQ25ELE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMzQywyQkFBa0M7QUFDbEMsK0JBQTRCO0FBQzVCLHFCQUFtQjtBQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsT0FBTyxDQUFDLFFBQVEsbURBQVEsZ0JBQWdCLEtBQUc7SUFDMUMsSUFBSSxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0NBQzNCLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdCLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMxRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM3RSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN4RSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQ25DLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQ3hDLENBQUM7SUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pDLE1BQU0sZUFBZSxHQUFHLGlCQUFZLENBQUMsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN6RSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFzdGlmeSwgeyBGYXN0aWZ5SW5zdGFuY2UgfSBmcm9tICdmYXN0aWZ5JztcbmNvbnN0IGZhc3RpZnkgPSBGYXN0aWZ5KHsgbG9nZ2VyOiBmYWxzZSB9KTtcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCAnLi9wYXJzZU1kJztcbmNvbnN0IHBvcnQgPSAzMDAwO1xuZmFzdGlmeS5yZWdpc3RlcihpbXBvcnQoJ2Zhc3RpZnktc3RhdGljJyksIHtcblx0cm9vdDogam9pbihfX2Rpcm5hbWUsICcuLicpLFxufSk7XG5mYXN0aWZ5LmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBidWZmZXJJbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLicsICdpbmRleC5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL3ByaXZhY3knLCAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYnVmZmVySW5kZXhIdG1sID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4nLCAncHJpdmFjeS5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL2NvbW1hbmRzJywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ2NvbW1hbmRzLmh0bWwnKSk7XG5cdHJlcy50eXBlKCd0ZXh0L2h0bWwnKS5zZW5kKGJ1ZmZlckluZGV4SHRtbCk7XG59KTtcbmZhc3RpZnkuZ2V0KCcvdG9zJywgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnN0IGJ1ZmZlckluZGV4SHRtbCA9IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uJywgJ3Rvcy5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL3NvY2lhbHMnLCAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYnVmZmVySW5kZXhIdG1sID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4nLCAnc29jaWFscy5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL2NyZWRpdHMnLCAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYnVmZmVySW5kZXhIdG1sID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4nLCAnY3JlZGl0Lmh0bWwnKSk7XG5cdHJlcy50eXBlKCd0ZXh0L2h0bWwnKS5zZW5kKGJ1ZmZlckluZGV4SHRtbCk7XG59KTtcbmZhc3RpZnkuZ2V0KCcvcGF0Y2hub3RlcycsIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCBidWZmZXJJbmRleEh0bWwgPSByZWFkRmlsZVN5bmMoXG5cdFx0am9pbihfX2Rpcm5hbWUsICcuLicsICdwYXRjaG5vdGVzLmh0bWwnKVxuXHQpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5LmdldCgnL2luZm8nLCAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYnVmZmVySW5kZXhIdG1sID0gcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4nLCAnaW5mby5odG1sJykpO1xuXHRyZXMudHlwZSgndGV4dC9odG1sJykuc2VuZChidWZmZXJJbmRleEh0bWwpO1xufSk7XG5mYXN0aWZ5Lmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcsICgpID0+IGNvbnNvbGUubG9nKCdodHRwOi8vbG9jYWxob3N0OicgKyBwb3J0KSk7XG4iXX0=