// Вправа 1: Базовий Async/Await

// Напишіть функцію delayedMessage, яка повертає Promise, який вирішується через 2 секунди з повідомленням «Hello, World!».
// Створіть ще одну функцію printMessage, яка використовує async/await для виклику delayedMessage і реєструє повідомлення на консолі.

async function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World!');
        }, 2000);
    });
};

async function printMessage() {
    try {
        const msg = await delayedMessage();
        console.log(msg);
    } catch(err) {
        console.log(err);
    };
};

printMessage();

// Вправа 2: отримання даних з API

// Напишіть функцію fetchUser, яка отримує дані з API JSONPlaceholder (https://jsonplaceholder.typicode.com/users/1).
// Використовуйте async/await, щоб отримати дані та зареєструвати ім’я та електронну адресу користувача у консолі.

// Вправа 3: Виправлення помилки в асинхронних функціях

// Змініть функцію fetchUser для обробки помилок за допомогою try...catch.
// Якщо сталася помилка (наприклад, проблеми з мережею, недійсна URL-адреса), зареєструйте повідомлення про помилку у консолі.

async function fetchUser() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!res.ok) {
            throw new Error();
        };
        
        const userData = await res.json();
        console.log('Name:', userData.name);
        console.log('Email:', userData.email);
        } catch (error) {
            console.error('Error:', error.message);
    };
};

fetchUser();

// Вправа 4: Послідовні асинхронні операції

// Напишіть функцію fetchPostAndUser, яка:
// Отримує публікацію з API JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/1).
// Використовує userId з публікації для отримання відповідних даних користувача.
// Запишіть назву публікації та ім’я користувача у консоль.

async function fetchPostAndUser() {
    try {
        const postRes = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const postData = postRes.data;

        const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        const userData = userRes.data;

        console.log('Post title:', postData.title);
        console.log('Username:', userData.name);
    } catch(err) {
        console.error('Error:', err.message);
    };
};

fetchPostAndUser();

// Вправа 5: Одночасні асинхронні операції

// Напишіть функцію fetchMultipleUsers, яка:
// Одночасно отримує дані для користувачів з ідентифікаторами 1, 2 і 3 з JSONPlaceholder API.
// Використовуйте Promise.all, щоб дочекатися виконання всіх запитів і записати масив імен користувачів у консоль.

async function fetchMultipleUsers() {
    const userId = [1, 2, 3];
    const userPromises = userId.map(async(id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.data;
        } catch(err) {
            console.error(err.message);
        };
    });

    try {
        const userNames = await Promise.all(userPromises);
        console.log('Users:', userNames);
    } catch(err) {
        console.err(err.message);
    };
};

fetchMultipleUsers();

// Вправа 6: ланцюжок промісів

// Напишіть функцію fetchData, яка:
// Отримує список дописів з JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts).
// Використовує ідентифікатор першої публікації для отримання коментарів до цієї публікації (https://jsonplaceholder.typicode.com/comments?postId=1).
// Зареєструйте назву першої публікації та кількість коментарів до неї.

async function fetchData() {
    try {
        const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = postsRes.data;
        const firstPost = posts[0];

        const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
        const comments = commentsRes.data;

        console.log('Назва першоЇ публікації:', firstPost.title);
        console.log('Кількість коментарів:', comments.length);
    } catch(err) {
        console.error('Error:', err.message);
    };
};

fetchData();