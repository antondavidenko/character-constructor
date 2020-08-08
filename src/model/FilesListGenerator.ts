export function filesListGenerator(fileNameSuffix: string, maxNumber: number, lastNone = false): string[] {
    const result = [];
    for (let i = 1; i <= maxNumber; i++) {
        const index = i<10 ? '0' + i.toString() : i.toString(); 
        result.push(fileNameSuffix + index);
    }
    if (lastNone) {
        result.push('none');
    }
    return result;
}