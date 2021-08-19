
export function getRandomThrow(array) {
    let randomnumber = Math.floor(Math.random() * (array.length));
    return array[randomnumber];
}