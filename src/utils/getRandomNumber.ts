export const getRandomNumber = (min:number, max:number) => {
    return String(Math.random() * (max - min) + min);
}