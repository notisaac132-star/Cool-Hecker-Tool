// Minimal preload. The game is fully self-contained in the renderer and never
// touches the real network, filesystem, or OS — everything is simulated in-memory.
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('cipherquest', {
  version: '1.0.0',
  platform: process.platform
});
