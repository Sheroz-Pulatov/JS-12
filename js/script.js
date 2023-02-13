let password;
let attempt = 1;
let hello = alert('Чтоб зайти в систему введите пароль !');
let faq = alert('У вас будет 3 попытки чтоб зайти в систему не просрите !')


do {
    password = +prompt(`Попытка: ( ${attempt} ) для входа в систему !`).trim()
    attempt++     
} while (password !== 1234 && attempt !== 4 )

