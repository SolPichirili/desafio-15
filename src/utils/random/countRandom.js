const { getRandom } = require('./getRandom');

process.on('message', cant => {
    const numbers = [];

    for (let index = 0; index < cant; index++) {
        const random = getRandom(1, 1001);
        numbers.push(random)
    };

    const result = {};
    numbers.forEach((number) => {
        if (result[number]) {
            result[number]++;
        } else {
            result[number] = 1;
        }
    });

    process.send(result);
});

process.send('listo');