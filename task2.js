
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = creatKey();
let defaultMsg = 'Hello, world!'

function creatKey() {
    // Создаем ключ-строку, перемещиваем буквы алфавита
    let keyArr = [],
        key = '';

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    while (keyArr.length != alphabet.length) {
        let rand = randomInteger(0, alphabet.length - 1);
        keyArr.indexOf(rand) == -1 ? 
            keyArr.push(rand) : rand = randomInteger(0, alphabet.length - 1);
    }

    for (i of keyArr) key += alphabet[i]

    return key;
}

let encrypt = (msg, key) => {
    // Разбиваем сообщение на секции по 26 символов
    let msgArr = msg.match(/.{1,26}/g) 
    let res = ''

    checkMsgLength = (msg) => {
        // Проверяем длину одной секции
        if (msg.length != alphabet.length) {
            while (msg.length != alphabet.length) {
                msg += '-';
            }
        }
        return msg;
    }

    for (i of msgArr) {
        i = checkMsgLength(i)
        let temp = '';

        for (j of key) {
            temp += i[alphabet.indexOf(j)];
        }
        res += temp;
    }
    return res;
}  

let encryptMsg = encrypt(defaultMsg, key);

let decrypt = (encryptMsg, key) => {
  // Разбиваем сообщение на секции по 26 символов
    let msgArr = encryptMsg.match(/.{1,26}/g) 
    let res = ''

    for (i of msgArr) {
        let temp = '';

        for (j of alphabet) {
            temp += i[key.indexOf(j)];
        }

        res += temp;
    }
    return res;
}

let decryptMsg = decrypt(encryptMsg, key);

console.log(`Encrypt.\nkey: ${key}\nmsg: ${encryptMsg}`)
console.log(`Decrypt.\nkey: ${key}\nmsg: ${decryptMsg}`)


