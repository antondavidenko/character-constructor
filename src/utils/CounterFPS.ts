let fps = 0;
let times = [];

export function updateFPS() {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;

}

export function getFPS(): number {
    return fps;
}