// Задача 1. Отримання випадкового елемента.
//  Опиши функцію getRandom<T>, яка приймає масив будь-якого типу та повертає випадковий елемент з нього.
function GetRandom(arrList) {
    const randEl = Math.floor(Math.random() * arrList.length);
    return arrList[randEl];
}
export default GetRandom;
