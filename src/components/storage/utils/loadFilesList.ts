import * as $ from "jquery";

export const CDN_ROOT = "http://127.0.0.1:5500/";
const CONFIG = "cdn_config.json";

export function loadList(callback: (data: any) => void): void {
    $.getJSON(`${CDN_ROOT}${CONFIG}`, (data: any) => {
        callback(data);
    });
}