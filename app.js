// 1. Вивести одним рядком мінімальне значення масиву за допомогою деструктуризації та Math

const array = [1, 2, 3, 4, 6, 710, 34013, 13];

const minValue = Math.min(...array);

// 2. Функція multiply не приймає явно ніяких параметрів

function multiply(a, b) {
    return a * b;
};

// 3. У нас є функція totalPrice - за допомогою деструктуризації об'єкту зробити так, що б функція працювала

const product = {
    productName: "Water",
    price: 20,
    count: 3,
};

function totalPrice({price, count}) {
    return price * count;
};

// console.log(totalPrice(product));

// 4. Написати об'єкт у котрому буде властивість items ( спочатку пустий масив)
// метод об'єкту setItems котрий приймає масив значень і встановлює цей масив як значення властивості items
// метод об'єкту sum котрий повертає суму усіх елементів масиву items
// метод maxValue еотрий поверає максимальне значення з масиву items з використанням деструктуризації масиву

const obj = {
    items: [],
    setItems(newItems) {
    this.items = newItems;
    },
    sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
    },
    maxValue() {
    const [maxValue] = this.items.sort((a, b) => b - a);
    return maxValue;
    },
};

// 5. Написати функционал так, що б при виклику showPrediction виводилась випадковий вираз з масиву predictArr
// кожні 3 секунди
// Додати метод для зупинки роботи виводу виразів

const predictsArr = {
    phrases: [
    "Удача прийде звідки не чекаєте.",
    "Давні борги будуть повернуті вам.",
    "Вас чекає несподіване грошове надходження.",
    "Всі незакінчені справи будуть завершені.",
    "Яскрава пригода вже чекає на вас.",
    "Планування часу допоможе вам не запізнитися на зустріч.",
    "Інтуїція цього разу не підведе вас. Використовуйте це.",
    "Прислухайтеся до себе і відповідь на запитання буде знайдено.",
    "З'явиться можливість вирушити в дорогу.",
    "Ваш цінний досвід зможе комусь допомогти, якщо перестанете його ховати в собі.",
    "Вам не вдасться сподобатися всім, не витрачайте на це енергію.",
    "Одяг, який вас старить, не дістанеться вам.",
    ],
    intervalId: '',
    prediction: function() {
        const {phrases} = this;
        const phraseNumber = Math.floor(Math.random() * phrases.length);
        return phrases[phraseNumber];
    },
    showPrediction: function() {
        const id = setInterval(() => {
        console.log(this);
        console.log(this.prediction());
    }, 3000);
    this.intervalId = id;
    },
    stop: function() {
        const {intervalId} = this;

        clearInterval(intervalId);
    },
};