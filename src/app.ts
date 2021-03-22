import { MainScreen } from './MainScreen';
import { initStorage } from '@antondavidenko/modular-character-threejs';

export const CDN_ROOT = "http://127.0.0.1:5500/";
// export const CDN_ROOT = "http://antondavidenko.com/show/chr_cdn_v1/";
initStorage(CDN_ROOT);

setTimeout(() => {
    new MainScreen();
}, 3000);