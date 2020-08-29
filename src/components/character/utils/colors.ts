export function colorStringToNumber(colorString: string): number {
    let result = parseInt('0x' + colorString.substring(1, colorString.length));
    return result;
}